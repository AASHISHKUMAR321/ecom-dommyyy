const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true, 
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  username:{
    type:String,
    require:true,
    unique:true
  },
  address:{
    type:String,
    require:true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});
const userModel = mongoose.model("UserModel", userSchema)
module.exports=userModel;