const Wishlist = require("../models/Wishlist")
const { NotFoundError, BadRequestError} = require("../errors") 
const {StatusCodes} = require("http-status-codes")


const createWishList = async(req , res)=>{

const { property } = req.body

if(!req.user.userId || !property){
    throw new BadRequestError("Please provide all values")
}

    const wishlistExist = await Wishlist.findOne({user:req.user.userId})

    if(wishlistExist){
        
        const propertyExist = wishlistExist.properties.find(item=>item.property.toString() === property)

        if(propertyExist){
            throw new BadRequestError("Property already exist in the wishlist")
        }
        wishlistExist.properties.push({property})
        await wishlistExist.save()
    }else{
        await Wishlist.create({
            user: req.user.userId,
            properties: [{property}],
        })
       
    }

    res.status(StatusCodes.OK).json({success:true,property})
   
}



const getWishlist = async(req, res)=>{

const wishlist = await Wishlist.findOne({ user: req.user.userId })
    .populate({
      path: "properties",
      populate: {
        path: "property",
       
        select: "title price  area mainImage location", // Specify the fields you want to populate
      },
    })
    .exec();
      

    if(!wishlist){
        throw new NotFoundError("No wishlist found for this user")
    }


    res.status(StatusCodes.OK).json({success:true, wishlist})
}


const removeItemFromWishList = async(req, res)=>{
   
  

    const { id:property} = req.params
   
    const wishlist = await Wishlist.findOne({user:req.user.userId})

    if(!wishlist){
        throw  new NotFoundError("User's wishlist not found ")
    }

    const indexToRemove = wishlist.properties.findIndex(
        (item) => item.property.toString() === property
      );


      if(indexToRemove === -1){
        throw  new NotFoundError("Property not found in the wishlist ")
      }

      wishlist.properties.splice(indexToRemove, 1); // Remove the property

      const savedWishlist = await wishlist.save();


      res.status(StatusCodes.OK).json({success:true, wishlist:savedWishlist})


}



module.exports ={
    createWishList, removeItemFromWishList, getWishlist
}