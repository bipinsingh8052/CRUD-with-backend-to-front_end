const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    name:String,
    age:Number,
    EmployeeId:String,
    salary:Number
})
module.exports= mongoose.model("Employee" ,Schema);