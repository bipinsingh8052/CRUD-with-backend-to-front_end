const express=require("express");
const route =express.Router();
const ContollerEmploy =require("../Controller/Employee");

route.get("/home",ContollerEmploy.homePage);
route.get("/display" ,ContollerEmploy.DisplayPage);
route.post("/insert",ContollerEmploy.InsertPage);


module.exports=route;