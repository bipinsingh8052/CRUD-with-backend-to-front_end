const express =require("express");
const App =express();
const mongoose =require("mongoose");
const bodyParse =require("body-parser");
const cors =require("cors");
const RouteEmp =require("./Routes/Employess")
App.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Employess").then(()=>{
    console.log("This is connected ");
})
.catch(()=>{
    console.log("this is not connect");
})
// parse application/x-www-form-urlencoded
App.use(bodyParse.urlencoded({ extended: true }))

// parse application/json
App.use(bodyParse.json())



  App.use("/empolyee" ,RouteEmp)
App.listen(8000,()=>{
    console.log("This is workiing on port no 8000");
})