    import React, { useState } from 'react'
    import axios from 'axios'
    export default function Insert() {
        let [input,set_Input]=useState({})
        const HandleINput=(e)=>{
            const {name,value}=e.target;
            set_Input(values=>({
                ...values,
                [name]:value
            }))
        }
        
        const Submitfrom=()=>{
            console.log(input)
        }
        const fromSubmit=async(e)=>{
            e.preventDefault();
            let api=('http://localhost:8000/empolyee/insert');
            let res= await  axios.post(api,input);
            console.log(res.data);

        }
        
        return (
        <>

        <form onSubmit={fromSubmit}>

    <div className="mb-3">
    <label  className="form-label">Enter the Name</label>
    <input type="text" className="form-control" name='name'  placeholder="Enter the Name"  onChange={HandleINput}/ >
    </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the Age:</label>
        <input type="number" className="form-control" name='age'  placeholder="Enter the age:" onChange={HandleINput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the EmployeeID:</label>
        <input type="text" className="form-control"  name='EmployeeId' placeholder="Enter the EmployeeID" onChange={HandleINput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the Salary:</label>
        <input type="text" className="form-control" name='salary'  placeholder="Enter the Salary" onChange={HandleINput}/>
        </div>

        <button onClick={Submitfrom}>Submit</button>
</form>
      
    </>
  )
}
