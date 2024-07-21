import React, { useEffect, useState } from 'react'
import '../CSS/Dashboard.css'
import axios from 'axios'
const Dashboard = () => {
  const [students,setStudents]=useState(0)
  const [admin,setAdmimn]=useState(0)
  const [books,setBooks]=useState(0)
  useEffect(()=>{
    // axios.get('http://localhost:3001/dashboard')
    axios.get('https://book-store-seven-pi.vercel.app/dashboard')
    .then(res=>{
      if(res.data.ok){
        setStudents(res.data.student)
        setAdmimn(res.data.admin)
        setBooks(res.data.book)
      }
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <div className='dashboard'>
      <div className="dashboard-box">
        <h2>Total Books</h2><br/>
        <h2>{books}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2><br/>
        <h2>{students}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admins</h2><br/>
        <h2>{admin}</h2>
      </div>
      
    </div>
  )
}

export default Dashboard
