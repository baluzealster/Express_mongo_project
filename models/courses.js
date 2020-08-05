const mongoose= require("mongoose");
const courseSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    noOfUsersliked:{
        type:Number,
        required:true
    }
})
const courseModel= mongoose.model("courses",courseSchema);
exports.courseModel=courseModel;