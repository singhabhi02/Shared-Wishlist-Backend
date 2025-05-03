// this is wishlist.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  addedBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const wishlistSchema = new mongoose.Schema(
  {
    name: String,
    createdBy: String,
    users: [String],
    products: [productSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);
