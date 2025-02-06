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
    res.json({msg:"Data is success saved"})
}



const SearchPage =async(req,res)=>{
    const {name}=req.body;
    console.log(name);
    const data = await ModelEmploye.find({name:name})
    res.send(data)
}

const DeletePage=async(req,res)=>{
    console.log(req.query);
    const{emp}=req.query;
    console.log(emp,"id")
    await ModelEmploye.findByIdAndDelete(emp);
    res.send("Deleted that Employeee Data")
}


const updateDataPage=async(req,res)=>{
    // console.log(req.body);
    const { empid}=req.body;
    const data = await ModelEmploye.findById(empid)
    console.log(data,"hanan")
    res.send(data)
   
    // res.send("updata")
}

const UpdateSave=async(req,res)=>{
    // console.log(req.body);
    const{_id}=req.body;
    console.log(_id)
    await ModelEmploye.findByIdAndUpdate(_id,req.body)
    res.send("Data is UpDated !!!")
}



module.exports={
    homePage,
    DisplayPage,
    InsertPage,
    SearchPage,
    DeletePage,
    updateDataPage,
    UpdateSave

}