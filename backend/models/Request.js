const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const RequestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    message: {
      type: String,
      default: "No Message",
    },
    requestType: {
      type: [String],
      enum: ["phone", "sms", "whatsapp"],
      required: true
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
