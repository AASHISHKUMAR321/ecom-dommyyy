const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    custId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      del_status: {
        type: Boolean,
        default: false
      },
      address: String,
      products: [{
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        q: {
          type: Number,
          default: 1
        }
      }]}, {timestamps:true});

const orderModel = mongoose.model("OrderModel", orderSchema)
module.exports=orderModel;