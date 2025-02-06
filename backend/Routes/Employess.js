const express=require("express");
const route =express.Router();
const ContollerEmploy =require("../Controller/Employee");

route.get("/home",ContollerEmploy.homePage);
route.get("/display" ,ContollerEmploy.DisplayPage);
route.post("/insert",ContollerEmploy.InsertPage);
route.post("/search",ContollerEmploy.SearchPage);
route.get("/delete" ,ContollerEmploy.DeletePage)
route.post("/updateData",ContollerEmploy.updateDataPage);
route.post("/updatesave" ,ContollerEmploy.UpdateSave)
module.exports=route;