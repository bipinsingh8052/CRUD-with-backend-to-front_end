import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
export default function Display() {
    let [data,set_Data]=useState([]);

    const dataDisplay= async()=>{
        let api="http://localhost:8000/empolyee/display";
        let resp =await axios.get(api)
        console.log(resp.data);
        set_Data(resp.data);
    }
    useEffect(()=>{
        dataDisplay();
    },[]);
  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Employee Name</th>
          <th>Employess Age</th>
          <th>Employee Id</th>
          <th>Employee Salary</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e,index)=>(
                <tr key={index}>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.EmployeeId}</td>
          <td>{e.salary}</td>
        </tr>
            ))
        }
        
      </tbody>
    </Table>
      
    </>
  )
}
