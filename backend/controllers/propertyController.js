const { NotFoundError, BadRequestError } = require("../errors");
const Property = require("../models/Property");
const { StatusCodes } = require("http-status-codes");

const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getSingleProperty = async (req, res) => {
  const { id } = req.params;

  const property = await Property.findById(id).populate({
    path:"location",
    select:"name",
  });
;

  if (!property) {
    throw new NotFoundError(`No property found matching the id:${id}`);
  }

  res.status(StatusCodes.OK).json(property);
};

const getAllProperties = async (req, res) => {
  const { featured, location, search, sort, field, page, numericFilters } =
    req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (location) {
    queryObject.location ={ _id:location};
  }

  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }

  if (numericFilters) {
    const opertorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "&lt;": "$lt",
      "<=": "$lte",
      "&lt;=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=|&lt;|&lt;=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${opertorMap[match]}-`
    );

    const options = ["price", "area"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Property.find(queryObject).populate({
    path:"location",
    select:"name",
  });

  const totalItems = await Property.find(queryObject).countDocuments();

  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("createdAt");
  }

  //pagination
  if (page) {
    const pagination = Number(page);
    const limit = Number(req.query.limit) || 8;
    const skip = (pagination - 1) * limit;

    result = result.skip(skip).limit(limit);
  }

  const properties = await result;

  res.status(StatusCodes.OK).json({
    properties,
    nbHits: properties.length,
    totalProperties: totalItems,
  });
};





const createProperty = async (req, res) => {
  const { title, description, price, location, area, images, mainImage } =
    req.body;

   

  if (
    !title ||
    !description ||
    !price ||
    !location ||
    !area ||
    !images ||
    !mainImage.url
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const [responseMainImage, responseImages] = await Promise.all([
    cloudinary.uploader.upload(mainImage.url, {
      folder: "land_listing",
      public_id: `${title}-mainImage`,
    }),
    Promise.all(
      images.map((image, index) =>
        cloudinary.uploader.upload(image.url, {
          folder: "land_listing",
          public_id: `${title}-${index}`,
        })
      )
    ).then((responseImages) =>
      responseImages.map((responseImage) => ({
        url: responseImage.secure_url,
        public_id: responseImage.public_id,
      }))
    ),
  ]);

  

  const property = await Property.create({
    title,
    description,
    price,
    location,
    area,
    mainImage: {
      url: responseMainImage.secure_url,
      public_id: responseMainImage.public_id,
    },
    images: responseImages,
  });

  res.status(StatusCodes.CREATED).json({ success: true, property });
};




const updateProperty = async (req, res)=>{
  const { id } = req.params;
  const { title, description, price, location, area, images, mainImage } =
  req.body;

 

if (
  !title ||
  !description ||
  !price ||
  !location ||
  !area ||
  !images ||
  !mainImage.url
) {
  throw new BadRequestError("Please provide all values");
}


const property = await Property.findById(id);

if (!property) {
  throw new NotFoundError(`No property found matching the id:${id}`);
}

await cloudinary.uploader.destroy(property.mainImage.public_id)

for (const image of property.images) {
  await cloudinary.uploader.destroy(image.public_id);
 }



 const [responseMainImage, responseImages] = await Promise.all([
  cloudinary.uploader.upload(mainImage.url, {
    folder: "land_listing",
    public_id: `${title}-mainImage`,
  }),
  Promise.all(
    images.map((image, index) =>
      cloudinary.uploader.upload(image.url, {
        folder: "land_listing",
        public_id: `${title}-${index}`,
      })
    )
  ).then((responseImages) =>
    responseImages.map((responseImage) => ({
      url: responseImage.secure_url,
      public_id: responseImage.public_id,
    }))
  ),
]);

// Update properties on the document instance
property.title = title;
property.description = description;
property.price = price;
property.location = location;
property.area = area;
property.mainImage.url = responseMainImage.secure_url;
property.mainImage.public_id = responseMainImage.public_id;
property.images = responseImages;

// Save the changes to the database
await property.save();
console.log("success")

res.status(StatusCodes.CREATED).json({ success: true, property });

}






const deleteProperty = async (req, res) => {
  const { id } = req.params;

  const property = await Property.findById(id);

  if (!property) {
    throw new NotFoundError(`No property found matching the id:${id}`);
  }
  await cloudinary.uploader.destroy(property.mainImage.public_id)

  for (const image of property.images) {
    await cloudinary.uploader.destroy(image.public_id);
   }
  await property.deleteOne();

  res.status(StatusCodes.ACCEPTED).json({ success: true });
};

module.exports = {
  getAllProperties,
  getSingleProperty,
  deleteProperty,
  createProperty,
  updateProperty,
};
