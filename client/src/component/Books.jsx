import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from './BookCard'
import '../CSS/Book.css'

const Books = ({role}) => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    axios.get(`${window.location.origin}/book/books`)
    .then(res=>{
      setBooks(res.data)
      console.log(res.data)
    }).catch(err=>console.log(err))
  },[])
  return (
    <div className='book-list'>
      {
        books.map(book=>{
          return <BookCard key={book.id} book={book} role={role}></BookCard>
        })
      }
    </div>
  )
}

export default Books
