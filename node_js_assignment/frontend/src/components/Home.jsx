import React, { useEffect } from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import Blog from './Blog';
  


function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    getAllBlogs()
  }, [])

  const getAllBlogs = () => {
    axios.get("http://localhost:3001/blog")
    .then((response)=>{
      setBlogs([...response.data])
    })
  }

  return (
    <div className='px-5 py-3 bg-secondary'>
      <p className='h1 mb-4 text-center text-white'>Blogs</p>
      {blogs.map((blog)=>{
        return(
          <Blog blog = {blog} getAllBlogs={getAllBlogs}/>
        )
      })}  
    </div> 
  )
}

export default Home