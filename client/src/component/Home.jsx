import React, { useEffect } from 'react'
import "../CSS/Home.css"
import axios from 'axios'
const Home = () => {
  return (
    <div className='home'>
      <div className="home-content">
        <h1 className='home-text'>Book Store</h1>
        <p className='home-description'>The only thing you absolutely have to know is the location of the library.</p>
      </div>
      <div className="home-image"></div>
    </div>
  )
}

export default Home
