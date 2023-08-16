const CustomAPIError = require('./custom-error')
const {StatusCodes } = require('http-status-codes')


class ForbiddenError extends CustomAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
    send(res) {
        super.send(res);
      }
}


module.exports = ForbiddenError