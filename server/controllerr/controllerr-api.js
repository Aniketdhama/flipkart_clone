//import { response } from "express";

import User from "../model/user-schema.js";

//in backend api one we r having req and other is response
export const usersignup=async(req,res)=>{
    try{
        const excit=await User.findOne({username:req.body.username});
        if(excit){
            return res.status(401).json({message:'username already excit'})
        }
         const user=req.body;
         const Newuser=new User(user);
         await Newuser.save()
         res.status(200).json({message:user})
    }
    catch(error){
        res.status(500).json({message:error.message})

    }

}
////
export  const userLogin=async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        let user=await User.findOne({username:username,password:password})
        if(user){
            return res.status(200).json({data:user})
        }
        else{
            return res.status(401).json('Invalid login')
        }
 
    }catch(error){
        res.status(500).json('error',error.meassage)
    }
}