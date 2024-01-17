const express= require('express');
const mongoose=require('mongoose');
const {  login, register, AddOrderByUserId, GetAllOrderByUserId, profile, getProductByID, getAllproducts }= require('../controllers/user_c');

const router= express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/getAllproducts',getAllproducts);
router.get('/getProductByID/:id',getProductByID);
router.get('/profile',profile);
router.get('/GetAllOrderByUserId',GetAllOrderByUserId);
router.post('/AddOrderByUserId',AddOrderByUserId);




module.exports= router;
