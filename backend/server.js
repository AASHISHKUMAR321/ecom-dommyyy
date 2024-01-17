const express= require("express");
const app = express();
const PORT=4000;
const cors=require('cors');
const mongoose =require('mongoose');
const {MONGOBD_URL}= require("./config")
const user_r = require('./routes/user_r');
const seed_r = require('./routes/seed_r');
const admin_r= require('./routes/admin_r');

mongoose.connect(MONGOBD_URL);

mongoose.connection.on('connected',()=>{
    console.log("DB connected")
})

mongoose.connection.on('error',(error)=>{
    console.log("Some error while connectinng to DB")
})
app.use(cors());
app.use(express.json());
app.use(user_r);
app.use(seed_r);
app.use(admin_r);


app.listen(PORT, ()=>{
    console.log("server started");
});