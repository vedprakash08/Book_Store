import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const DeleteBook = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        axios.delete('https://book-store-api-weld.vercel.app/book/book/'+id)
        .then(res=>{
            if(res.data.deleted){
                navigate('/books')
            }
        }).catch(err=>console.log(err))
      },[])
}

export default DeleteBook
