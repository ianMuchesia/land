const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PropertySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    mainImage:{
      type:{
        url:{type:String},
        public_id: {type:String},
      },
      required: true,
    },
    images: {
      type: [{
        url :{type:String},
        public_id: {type:String}

      }],
      required: true,
      validate: {
        validator: function(arr) {
          return arr.length > 0;
        },
        message: 'The imageUrls array must contain at least one URL.',
      },
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
