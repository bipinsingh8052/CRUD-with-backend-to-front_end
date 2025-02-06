
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
export default function UpdateFrom() {
    let [edit_data,set_edit_Data]=useState({});
    let {id}=useParams();
    // console.log(id)
    let nav= useNavigate();

    const loading=()=>{
        let api="http://localhost:8000/empolyee/updateData";
        axios.post(api,{empid:id}).then(res=>{
            console.log(res.data);
            set_edit_Data(res.data)
        })
    }

    const Submitfrom=(e)=>{
        e.preventDefault();

        let api="http://localhost:8000/empolyee/updatesave";
        axios.post(api,edit_data).then(res=>{
            message.success(res.data)
        })
        nav("/display")

    }
    const HandleINput=(e)=>{
        let {name,value}=e.target;
        set_edit_Data(values=>({
            ...values,[name]:value
        }))

    }
    useEffect(()=>{
        loading();
    },[])
  return (
    <>

    {/* edit page */}

     <h1 style={{color:"yellow", backgroundColor:"whitesmoke", textAlign:"center"}}>Edit the Data </h1>
     <br /><br /><br /><br /><br /><br /><br />



     <form >

    <div className="mb-3">
    <label  className="form-label">Enter the Name</label>
    <input type="text" className="form-control" name='name'  value={edit_data.name} onChange={HandleINput}/ >
    </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the Age:</label>
        <input type="number" className="form-control" name='age'  value={edit_data.age}  onChange={HandleINput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the EmployeeID:</label>
        <input type="text" className="form-control"  name='EmployeeId' value={edit_data.EmployeeId} onChange={HandleINput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the Salary:</label>
        <input type="text" className="form-control" name='salary'  value={edit_data.salary} onChange={HandleINput}/>
        </div>

        <button onClick={Submitfrom}>Submit</button>
</form>
    </>
  )
}
