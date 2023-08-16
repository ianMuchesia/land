const { UnauthenticatedError, ForbiddenError } = require("../errors")
const { isTokenValid } = require("../utils")




const authenticateUser = async(req, res, next)=>{
    const token = req.signedCookies.token
 
    if(!token){
        throw new UnauthenticatedError("Authentication Invalid")

    }
   
    const {name , userId , role } = isTokenValid({token})
    req.user = {name , userId, role};
    next()
}


const authorizePermission=(...roles)=>{
    return async(req, res, next)=>{
        if(!roles.includes(req.user.role)){
            throw new ForbiddenError("Not authorized to access this route")
        }
        next()
    }
}


module.exports = {
    authorizePermission, authenticateUser
}