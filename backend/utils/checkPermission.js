const { ForbiddenError} = require('../errors');
const {StatusCodes} = require('http-status-codes')

const checkPermission = (requestUser, resourceUserId) => {
    if (requestUser.role === 'admin') return;
    if (requestUser.userId === resourceUserId.toString()) return;
    throw new ForbiddenError(
      'Not authorized to access this route'
    );
};

module.exports = checkPermission;