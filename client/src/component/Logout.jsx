import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = ({setRole}) => {
    const navigate = useNavigate()
  useEffect(()=>{
    // axios.get('http://localhost:3001/auth/logout')
    axios.get('https://book-store-we4z.vercel.app/auth/logout')
    .then(res=>{
        if(res.data.logout){
            setRole('')
            navigate('/')
        }
    }).catch(err=>console.log(err))
  },[])
}

export default Logout
