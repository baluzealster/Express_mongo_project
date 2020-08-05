const express = require("express");
const mongoose = require("mongoose")
const {userModel}= require("../models/users");
const router = express.Router();


router.post("/", async (req,res)=>{
    let user = new userModel({
        name:req.body.name,
        profession:req.body.profession,
        salary:req.body.salary,
        email:req.body.email
    })
    console.log(user);
    if(user){
        console.log("hello");
        user = await user.save();
        res.send(user)
    }
});

router.post("/",(req,res)=>{

})
module.exports = router