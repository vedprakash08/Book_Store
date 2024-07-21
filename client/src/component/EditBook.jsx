import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/Login.css'
import {useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
    const[name,setName]=useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate=useNavigate()
    const {id}=useParams()


    useEffect(()=>{
        // axios.get('http://localhost:3001/book/book/'+id)
        axios.get('https://book-store-we4z.vercel.app/book/book/'+id)
        .then(res=>{
            setName(res.data.name)
            setAuthor(res.data.author)
            setImageUrl(res.data.imageUrl)
        })
        .catch(err=>console.log(err))
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`${window.location.origin}/book/book/`+id,{name,author,imageUrl})
        .then(res=>{
            if(res.data.updated){
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
            <h2>Edit Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name:</label>
                <input type="text" name="book" id="book" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image Url:</label>
                <input type="text" name="imageUrl" id="imageUrl" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <button type='submit'>Update</button>
        </form>
      
    </div>
  )
}

export default EditBook
