
import Product from '../model/product-schema.js'

export const getProducts=async(req,res)=>{
    try{
        //for all object we have to make empty object
       const products=await Product.find({});
       res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message:error.message})
     }

}

export const getProductById=async(req,res)=>{
    try{
        const id=req.params.id;
        const product=await Product.findOne({'id':id})
        res.status(200).json(product)


    }catch(eroor){
        res.status(500).json({message:eroor.message})

    }
}