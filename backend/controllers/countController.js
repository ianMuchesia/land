const { StatusCodes } = require("http-status-codes");
const Request = require("../models/Request")
const User = require("../models/User");
const Property = require("../models/Property");



const counter = async(req, res)=>{

    const [totalRequests, totalProperties, totalAdmini] = await Promise.all([
        Request.countDocuments(),
        Property.countDocuments(),
        User.countDocuments({ role: { $ne: "user" } })
    ]);

    const uniqueCustomers = new Set();

    const requests = await Request.find();
    requests.forEach(request => {
        uniqueCustomers.add(request.phone);
    });

    const uniqueCustomerCount = uniqueCustomers.size;

    // Return the results
    res.status(StatusCodes.OK).json({
        totalRequests,
        totalProperties,
        totalAdmini,
        uniqueCustomerCount
    });

}

module.exports = {counter}