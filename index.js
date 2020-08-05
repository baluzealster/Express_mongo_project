const express= require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./routes/users");
const courses = require("./routes/courses");

const {MONGO_URI,DATABASE_NAME}= require("./config/config")

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  } )
  .then(()=>console.log("connected to mongoDB"))
  .catch(err=>console.error("MOngodb not connected"))

app.use(express.json());
app.use("/api/user", user);
app.use("/api/courses", courses);
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App listening on the port${port}`); 
})