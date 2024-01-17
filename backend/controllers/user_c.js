const UserModel =require('../models/user_m');
const OrderModel = require('../models/order_m');
const jwt = require('jsonwebtoken');
const bcryptjs=require("bcryptjs");
const {JWT_SECRET}= require("../config")


const register= async (req, res) => {
    try {
      const { name, username, email, password, address } = req.body;
      if (!name ||!username || !password || !email || !address) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
      }
  
      const userInDB = await UserModel.findOne({ email: email });
  
      if (userInDB) {
        return res.status(500).json({ error: "User with this email is already registered" });
      }
  
      const hashedpassword = await bcryptjs.hash(password, 10);
  
      const user = new UserModel({ name,username,  email, password: hashedpassword , address});
      const newUser = await user.save();
  
      if (newUser) {
        return res.status(201).json({ result: "User Signed up successfully" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Server Error" });
    }
  };
  
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!password || !email) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
      }
  
      const userInDB = await UserModel.findOne({ email: email });
  
      if (!userInDB) {
        return res.status(401).json({ error: "Invalid Credentials" });
      }
  
      const didMatch = await bcryptjs.compare(password, userInDB.password);
  
      if (didMatch) {
        const user = new UserModel({ email, password });
        const userSaved = await user.save();
  
        if (userSaved) {
          const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
          const userInfo = { "email": userInDB.email, "fullname": userInDB.fullname };
  
          return res.status(200).json({ result: { token: jwtToken, user: userInfo, message:"user successfully login", isadmin:userInDB.isAdmin } });
        } else {
          return res.status(401).json({ error: "Invalid Credentials" });
        }
      } else {
        return res.status(401).json({ error: "Invalid Credentials" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Server Error" });
    }
  };

  const getAllproducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const getProductByID = async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const profile = async (req, res) => {
    try {
      const user = await Customer.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const GetAllOrderByUserId= async (req, res) => {
    try {
      const orders = await OrderModel.find({ custId: req.userId });
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const AddOrderByUserId = async (req, res) => {
    try {
      const { custId, amount, address, products } = req.body;
      const newOrder = new OrderModel({
        custId,
        amount,
        address,
        products
      });
  
      await newOrder.save();
      res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

  module.exports={
    register,
    login, 
    getAllproducts, 
    getProductByID,
    profile,
    GetAllOrderByUserId,
    AddOrderByUserId
  }