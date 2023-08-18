const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WishlistItemSchema = new Schema({
 
 
  property: {
    type: mongoose.Schema.ObjectId,
    ref: "Property",
    required: true,
  },
});

const WishlistSchema = new Schema(
 {
    properties: [ WishlistItemSchema],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;
