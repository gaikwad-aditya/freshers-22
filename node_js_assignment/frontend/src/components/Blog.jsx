import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Comment from './Comment'

const ReadMore = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <p className="">
      {isReadMore ? text.slice(0, 300) : text}
      <span onClick={toggleReadMore} className="text-primary pointer">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  )
}

const StarRating = (props) =>{
  const {blog} = props
  const like = blog.likes
  const disLike = blog.disLikes

  const count = Math.round((like/(like+disLike))/0.2) 
  return(
    <div>
      {[...Array(count)].map((star) => {        
        return (         
          <span className="star"><i className="fa fa-star px-1"></i></span>        
        );
      })}
      {[...Array(5-count)].map((star) => {        
        return (         
          <span className="star"><i className="fa fa-star-o px-1"></i></span>        
        );
      })}
    </div>
  )
}


const Blog = (props) => {
  const {blog} = props 
  const {getAllBlogs} = props
  const [creator, setCreator] = useState({})

  useEffect(()=>{
    getUser(blog.creator_id)
  })

  const getUser = (id) =>{
    axios.get(`http://localhost:3001/user/${id}`)
    .then((response)=>{
      setCreator({...response.data})
    })
  } 

  return (
    <div className='my-3 bg-white rounded-2'>
      <div className='bg-dark text-white  px-4  rounded-top'> 
        <span className='h4'>{blog.title}</span>
        <span className='float-end'>
          <StarRating blog = {blog}/>
          <p className='small text-center text-capitalize text-secondary'><i className="fa fa-x px-1 fa-thumbs-up text-white"></i>{blog.likes}<i className="ms-4 fa px-1 fa-x fa-thumbs-down text-white"></i>{blog.disLikes}</p>
        </span>
        <p className='small text-capitalize text-secondary'>created by: {creator.fName+" " + creator.lName+" on " + blog.date_time}</p>
      </div>

      <div className='px-4 py-1 justify'>
        <ReadMore >{blog.body}</ReadMore>
      </div>

      <div className='bg-dark text-white px-4 py-2 rounded-bottom'>
        <Comment blog={blog} getAllBlogs={getAllBlogs}/>
      </div>
    </div>
  )
}

export default Blog