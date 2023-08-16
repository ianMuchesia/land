const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const LocationSchema =  new Schema({
    name:{
        type:String,
        required: true
    }

}, {timestamps:true})



const Location = mongoose.model('Location', LocationSchema)


module.exports = Location