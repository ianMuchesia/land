const UnauthenticatedError = require("./unauthenticated");
const BadRequestError = require("./bad-request");
const CustomAPIError = require("./custom-error");
const NotFoundError = require("./not-found");
const ForbiddenError = require('./forbidden-error')


module.exports = {
  NotFoundError,
  UnauthenticatedError,
  CustomAPIError,
  BadRequestError,
  ForbiddenError
};