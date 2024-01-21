const express= require('express');
const mongoose=require('mongoose');
const {  login, register, AddOrderByUserId, GetAllOrderByUserId, profile, getProductByID, getAllproducts }= require('../controllers/user_c');
const { downloadFile, uploadFile } = require('../controllers/file_c');

const router= express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/getAllproducts',getAllproducts);
router.get('/getProductByID/:id',getProductByID);
router.get('/profile/:id',profile);
router.get('/GetAllOrderByUserId/:id',GetAllOrderByUserId);
router.post('/AddOrderByUserId',AddOrderByUserId);
router.post("/uploadFile", uploadFile)
router.get("/files/:filename", downloadFile);

module.exports= router;
