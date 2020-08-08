const express=require("express");
const router=express.Router();
const {courseModel}= require("../models/courses");

router.post("/",async (req,res)=>{
    let course= new courseModel({
        name:req.body.name,
        noOfUsersliked:req.body.noOfUsersliked
    });
    if(course){
        //course = await course.save();
        //console.log("I am working");
        res.send(course)
    }
})
router.get("/", async (req, res)=>{
    //console.log("i am working");
    res.send("I am working");
})
module.exports=router;