const Customer = require("../models/Customer");
const { StatusCodes } = require("http-status-codes");
const { communication } = require("../utils");
const { BadRequestError, NotFoundError } = require("../errors");
const Request = require("../models/Request");
const Property = require("../models/Property");

const phoneLink = process.env.MY_PHONE;
const phoneCall = async (req, res) => {
  const { phone, name, property, message } = req.body;

  if (!name || !phone || !property) {
    throw new BadRequestError("please provide all values");
  }

  const propertyID = await Property.findById(property);

 
  if (!propertyID) {
    throw new NotFoundError("Requested resource seems to be missing");
  }

  await Request.create({
    name,
    phone,
    property: propertyID._id,
    requestType: "phone",
  });

  res
    .status(StatusCodes.CREATED)
    .json({ link: `tel:+${phoneLink}`, success: true });
};

const sms = async (req, res) => {
  const { phone, name, property, message } = req.body;

  if (!name || !phone || !property || !message) {
    throw new BadRequestError("please provide all values");
  }

  const propertyID = await Property.findById(property);

  if (!propertyID) {
    throw new NotFoundError("Requested resource seems to be missing");
  }

  await Request.create({
    name,
    phone,
    property: propertyID._id,
    requestType: "sms",
    message,
  });

  let encodedMessage = encodeURIComponent(message)
  res
    .status(StatusCodes.CREATED)
    .json({ link: `sms:+${phoneLink}?&body=${encodedMessage}`, success: true });
};

const whatsapp = async (req, res) => {
  const { phone, name, property, message } = req.body;

  if (!name || !phone || !property || !message) {
    throw new BadRequestError("please provide all values");
  }

  const propertyID = await Property.findById(property);

  if (!propertyID) {
    throw new NotFoundError("Requested resource seems to be missing");
  }

  await Request.create({
    name,
    phone,
    property: propertyID._id,
    requestType: "whatsapp",
    message,
  });

  res
    .status(StatusCodes.CREATED)
    .json({
      link: `https://web.whatsapp.com/send?phone=+${phoneLink}`,
      success: true,
    });
};

const getAllRequests = async(req, res)=>{
  const { property , phone , search , sort, requestType, page } =req.query

  const queryObject = {}

  if(property){
    queryObject.property = property
  } 


  if(requestType){
    queryObject.requestType = [requestType]
  }

  if(phone){
    queryObject.phone = phone
  }

  if(search){
    queryObject.name = {$regex:search , $options: "i"}
  }
  

  let result = Request.find(queryObject).populate({
    path:"property",
    select:'title price',

  });

  const totalItems = await Request.find(queryObject).countDocuments();

  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("createdAt");
  }

  if(page){
    const pagination = Number(page);
    const limit = Number(req.query.limit) || 10;
    const skip = (pagination - 1) * limit;

    result = result.skip(skip).limit(limit);
  }


  const requests = await result;

  res.status(StatusCodes.OK).json({
    requests,
    nbHits: requests.length,
    totalRequests: totalItems,
  });

}



module.exports = { whatsapp, phoneCall, sms, getAllRequests };
