const express=require("express")
const router=express.Router()

const Class=require("../models/Classmodel")



 router.get("",async(req,res)=>{
    try{
     const posts=await Class.find().populate({path:"professor_id",select:{professor:1}}).populate({path:"slots_id",select:{start:1,end:1}}).lean().exec()
     return res.send(posts)
    }catch(err){
       return res.status(500).json({error:err.message})
    }
 })