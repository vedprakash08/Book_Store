import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/Login.css'
import {useNavigate } from 'react-router-dom'

const AddBook = () => {
    const[name,setName]=useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        // axios.post('http://localhost:3001/book/add',{name,author,imageUrl})
        axios.post('https://book-store-seven-pi.vercel.app/book/add',{name,author,imageUrl})
        .then(res=>{
            if(res.data.added){
                navigate('/books')
            }
            else{
                console.log(res)
            }
        })
        .catch(err=>console.log(err))
    }
 
  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name:</label>
                <input type="text" name="book" id="book" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author" onChange={(e)=>setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image Url:</label>
                <input type="text" name="imageUrl" id="imageUrl" onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <button type='submit'>Add</button>
        </form>
      
    </div>
  )
}

export default AddBook
