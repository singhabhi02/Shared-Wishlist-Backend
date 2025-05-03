const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");

// Create wishlist
router.post("/", async (req, res) => {
  const { name, createdBy, users } = req.body;
  const wishlist = new Wishlist({ name, createdBy, users, products: [] });
  await wishlist.save();
  res.json(wishlist);
});

// Get all wishlists
router.get("/", async (req, res) => {
  const wishlists = await Wishlist.find();
  res.json(wishlists);
});

// Add product
router.post("/:id/products", async (req, res) => {
  const { name, imageUrl, price, addedBy } = req.body;
  const wishlist = await Wishlist.findById(req.params.id);
  wishlist.products.push({ name, imageUrl, price, addedBy });
  await wishlist.save();
  res.json(wishlist);
});

// Edit product
router.put("/:wishlistId/products/:productId", async (req, res) => {
  const { name, imageUrl, price } = req.body;
  const wishlist = await Wishlist.findById(req.params.wishlistId);
  const product = wishlist.products.id(req.params.productId);
  if (name) product.name = name;
  if (imageUrl) product.imageUrl = imageUrl;
  if (price) product.price = price;
  await wishlist.save();
  res.json(wishlist);
});

// Delete a product from a wishlist
router.delete("/:wishlistId/products/:productId", async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.wishlistId);
    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });

    wishlist.products = wishlist.products.filter(
      (product) => product._id.toString() !== req.params.productId
    );

    await wishlist.save();
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ message: "Error deleting product" });
  }
});

// Delete wishlist by ID
router.delete("/:id", async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ message: "Wishlist deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting wishlist" });
  }
});

// Update wishlist name
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Wishlist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating wishlist" });
  }
});

module.exports = router;
