import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { message } from 'antd';
import { FiDelete } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
export default function UpdatePage() {
    let [MyData,setData]=useState([]);
    let nav =useNavigate();
    const loading=()=>{
        let api="http://localhost:8000/empolyee/display"
        axios.get(api)
        .then(res=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(()=>{
            console.log("error")
        })
    }

   
    const DeletedData=(id)=>{
        let api =`http://localhost:8000/empolyee/delete/?emp=${id}`;
        axios.get(api)
        .then(res=>{
            message.success(res.data);
        })
        loading();
        
        // console.log(id);
    }
    const editData=(id)=>{
        // let api =`http://localhost:8000/empolyee/updateData`;
        // axios.post(api,{empid:id})
        // .then(res=>{
        //     // message.success(res.data);
        //     console.log(res.data);
        // })
        // loading();
        nav(`/updatesave/${id}`)

    }


    useEffect(()=>{
        loading()
    },[ ])

    let counter=0;
  return (
    <>
    <h1 style={{textAlign:"center"}}>This  is Edit and Deleted page</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Name</th>
          <th>Employee Age</th>
          <th>Employee No</th>
          <th>Employee Salary</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
            MyData.map((e,index)=>{
                counter++;
                return(
                    <tr key={index}>
          <td>{counter}</td>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.EmployeeId}</td>
          <td>{e.salary}</td>
          <td > <FiDelete style={{cursor:"pointer", color:"red"}} onClick={()=>{DeletedData(e._id)}} /></td>
          <td><CiEdit style={{cursor:"pointer", color:"yellowgreen"}} onClick={()=>{editData(e._id)}} /></td>
        </tr>
                )
            })
        }
       
      </tbody>
    </Table> 
    </>
  )
}
