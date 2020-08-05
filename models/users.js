const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:10
    },
    profession:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    
    salary:{
        type:Number,
        required:true,

    }
})
const userModel = new mongoose.model("user",usersSchema);
exports.userModel=userModel;