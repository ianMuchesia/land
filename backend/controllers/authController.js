const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../errors")
const User = require("../models/User")
const { createToken, attachCookiesToResponse } = require("../utils")



const register = async(req, res)=>{
    const {name ,email , password} = req.body


    if(!name|| !email || !password){
        throw new BadRequestError("Please Provide All Values")
    }

    const EmailExists = await User.findOne({email})

    if(EmailExists){
        throw new BadRequestError("Email Provided Already Exists")
    }
 
    const user = await User.create(req.body)
    
    const tokenUser = createToken(user)

    attachCookiesToResponse({res, user:tokenUser})
 
 
    res.status(StatusCodes.ACCEPTED).json({user:tokenUser , success:true})


}


const login = async(req, res)=>{
   const { email , password} = req.body

   if(!email|| !password){
    throw new BadRequestError("Please Provide All Values")
   }

   const user = await User.findOne({email})

   if(!user){
    throw new BadRequestError(`No account associated with ${email}`)
   }

 
   const isPasswordCorrect = await user.comparePassword(password)

   if(!isPasswordCorrect){
    throw new BadRequestError(`Your Password and Email did not match, please check your details and try again`)
   }
   
   const tokenUser = createToken(user)

   attachCookiesToResponse({res, user:tokenUser})


   res.status(StatusCodes.ACCEPTED).json({user:tokenUser , success:true})
}


const logout = async(req, res)=>{
   
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
        secure: true, // Set secure to true for cross-origin requests over HTTPS
        signed: true,
        sameSite: 'None' //expires immediately
      });
      res.status(StatusCodes.OK).json({ success: true, msg: "user logged out!" });
}


const showUser = async(req, res)=>{
    res.status(StatusCodes.OK).json({success:true, user:req.user})
}

const loginAdmin = async(req,res)=>{

    const { email , password} = req.body

    if(!email|| !password){
     throw new BadRequestError("Please Provide All Values")
    }
 
    const user = await User.findOne({email, role:'admin'})
 
    if(!user){
     throw new BadRequestError(`No account associated with ${email}`)
    }
 
  
    const isPasswordCorrect = await user.comparePassword(password)
 
    if(!isPasswordCorrect){
     throw new BadRequestError(`Your Password and Email did not match, please check your details and try again`)
    }
    
    const tokenUser = createToken(user)
 
    attachCookiesToResponse({res, user:tokenUser})
  
 
       // Check if the cookies were successfully attached before considering the login successful
    //    if (!res.headersSent && res.cookies) {
    //     res.status(StatusCodes.ACCEPTED).json({ user: tokenUser, success: true });
    // } else {
    //     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Login failed. Cookies were not set." });
    // }
    res.status(StatusCodes.ACCEPTED).json({ user: tokenUser, success: true });

}

const showAdmin = async(req, res)=>{
    res.status(StatusCodes.OK).json({success:true, user:req.user})
}


const google = async(req, res)=>{

    const user = await User.findOne({
        email:req.body.email
    })

    if(user){
        const tokenUser = createToken(user)

        attachCookiesToResponse({res, user:tokenUser})
     
     
        res.status(StatusCodes.ACCEPTED).json({user:tokenUser , success:true})
    }else{

        const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      //const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      console.log(req.body)
      const newUser = new User({
        name:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: generatedPassword,
      
      });
      await newUser.save();
     
      const tokenUser = createToken(user)

      attachCookiesToResponse({res, user:tokenUser})
   
   
      res.status(StatusCodes.ACCEPTED).json({user:tokenUser , success:true})
    

    }
}

module.exports =  {
    register,
    login,
    logout,
    showUser,
    loginAdmin,
    showAdmin,
    google
}