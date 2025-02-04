const ModelEmploye =require("../Model/Employee")
const homePage=async(req,res)=>{
    res.send("home page");
}

const DisplayPage=async(req,res)=>{
    console.log(req.body);
    const data =await ModelEmploye.find();
    res.send(data);
}
const InsertPage=async(req,res)=>{
    const{
        name,
        age,
        EmployeeId,
        salary
      }=req.body;
    const data = await ModelEmploye.create({
        name,age,EmployeeId,salary
    })
    res.send(data)
}

module.exports={
    homePage,
    DisplayPage,
    InsertPage
}