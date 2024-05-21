
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const Defaultdata=async()=>{
    try{
        //await Product.deleteMany({}) //insted of this we have change in model only
       await Product.insertMany(products);
        console.log("data imported sucesssfully")
    }
    catch(error){
        console.log( "eroor occurerd",error.message)
    }

}
export default Defaultdata;