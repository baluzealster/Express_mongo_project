const express=require("express");
const router=express.Router();
const {courseModel}= require("../models/courses");

router.post("/",async (req,res)=>{
    let course= new courseModel({
        name:req.body.name,
        noOfUsersliked:req.body.noOfUsersliked
    });
    if(course){
        course = await course.save();
        res.send(course)
    }
})
module.exports=router;