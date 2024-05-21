// this file is for vaildation 

import mongoose from "mongoose";

const productschema=new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true,
    },
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});
//autoIncrement.initialize(mongoose.connection);
//productSchema.plugin(autoIncrement.plugin, 'product');
const Product=mongoose.model('product',productschema)

export default Product