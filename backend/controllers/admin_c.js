const Product = require('../models/products_m');
const Customer = require('../models/user_m');
const Order = require('../models/order_m');

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, quantity, category, image, rating, comments } = req.body;

    const newProduct = new Product({
      name,
      price,
      quantity,
      category,
      image,
      rating,
      comments
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Edit Product By Id
exports.editProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;

    const result = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete Product By Id
exports.deleteProductById = async (req, res) => {
  try {
    const productId = req.params.productId;

    const result = await Product.findByIdAndDelete(productId);

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Customer.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get All Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
