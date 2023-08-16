const CustomAPIError = require('./custom-error')
const {StatusCodes } = require('http-status-codes')


class BadRequestError extends CustomAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
    send(res) {
        super.send(res);
      }
}


module.exports = BadRequestError