import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Search() {
    let [input,SetInput]=useState()
    let [Alldata,set_All_data]=useState([]);

    const Searchdata=(e)=>{
        e.preventDefault();
        console.log(input);
        let api="http://localhost:8000/empolyee/search";
        axios.post(api,{name:input}).then(res=>{
            console.log(res.data);
            set_All_data(res.data);
        })
    }



    useEffect(()=>{},[])
  return (
    <>

    <div style={{textAlign:"center"}}>
        <h1>Search it the data </h1>
        <br></br>
        <hr />
        <h5>Enter the Employee No: <input type="text" name="name" onChange={(e)=>{SetInput(e.target.value)}} /> 
        <button onClick={Searchdata}>Search</button>
        
         </h5>
<hr />
<br /><br /><br />
<br />

         <div className="main" style={{display:"flex" ,justifyContent:"center", alignItems:"center", gap:"10px", flexWrap:"wrap"}}>
         {
            
            Alldata.map((e ,index)=>
                (
                <Card style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                        <Card.Title> <p>Employee Name :{e.name}</p></Card.Title>
                        <Card.Title>Employee ID :{e.EmployeeId}</Card.Title>
                        
                        <Card.Title>Employee Salary :{e.salary}</Card.Title>
                        <Card.Text> Employee Age: {e.age}
                        </Card.Text>
                    </Card.Body>
              </Card>
            )
        )
         }
        
         </div>
    </div>
      
    </>
  )
}
