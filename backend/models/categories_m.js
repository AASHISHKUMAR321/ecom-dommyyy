const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[{
        products:{type:mongoose.Types.ObjectId, ref:"product"},
        description:{type:String}
    }]
})

module.exports = mongoose.model("CategoryModel", CategorySchema)
