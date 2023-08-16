const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-error');

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
  send(res) {
    super.send(res);
  }
}

module.exports = UnauthenticatedError;