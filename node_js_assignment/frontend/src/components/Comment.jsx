import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Comments = (props) => {
  const {massage} = props
  const [sender, setSender] = useState({})

  useEffect(()=>{
    getUser(massage.sender_id)
  })

  const getUser = (id) =>{
    axios.get(`http://localhost:3001/user/${id}`)
    .then((response)=>{
      setSender(response.data)
    })
  } 

  return (
    <div className='bg-white p-2 mt-2 rounded shadow'>
      <span className='fw-bold text-capitalize'>{sender.fName + " " + sender.lName}</span>
      <span className='mx-2 font-monospace'>{massage.massage}</span>
      <span className='float-end font-monospace pt-1 text-secondary medium2'>{massage.date_time}</span>
    </div> 
  )
}






const Comment = (props) => {
  const {blog} = props
  const {getAllBlogs} = props
  // const navigate = useNavigate()
  const data = props.Details.webState
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  useEffect(()=>{
    getComments()
  },[])

  const getComments = () => {
    axios.get(`http://localhost:3001/comment/${blog.id}`)
    .then((response)=>{
      setComments([...response.data])
    })
  }

  const sendComment = () =>{
    if(data.isLogin)
    {
      if(comment.length !== 0)
      {
        const date = String(Date())
        const commentOB = {blogID : blog.id, massage: comment, date_time: date.slice(0,25), sender_id: data.id }
        axios.post("http://localhost:3001/comment/create", commentOB)
        .then((response)=>{
          getComments()
        })
        setComment("")
      }
      else{
        alert('Please! enter some comment')
      }
    }
    else{
      alert('Please! first login then comment')
    }
  }

  const liked = ()=>{
    const count = blog.likes + 1
    axios.patch(`http://localhost:3001/blog/${blog.id}/${count}/like`)
    .then((response)=>{
      getAllBlogs()
    })
  }
  
  const disLiked = ()=>{
    const count = blog.disLikes + 1
    axios.patch(`http://localhost:3001/blog/${blog.id}/${count}/disLike`)
    .then((response)=>{
      getAllBlogs()
    })
  }

  return (
    <div class="row g-3">
      <div class="col-sm">
        <input onChange={(e)=>{setComment(e.target.value)}} type="text" class="form-control form-control-sm mt-1" placeholder="Comment" aria-label="City"/>
      </div>

      <div class="col-sm">
        <button onClick={sendComment} type="submit" class="btn btn-secondary me-2 btn-sm"><i className="fa fa-2x fa-comment"></i></button>
        <button class="btn btn-secondary ms-2 btn-sm" type="button" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-2x fa-comments"></i></button>
        <button onClick={disLiked} type="submit" class="btn btn-secondary btn-sm ms-2 float-end"><i className="fa fa-2x fa-thumbs-down"></i></button>
        <button onClick={liked} type="submit" class="btn btn-secondary btn-sm me-2 float-end"><i className="fa fa-2x fa-thumbs-up"></i></button>
      </div>

      <div class="collapse" id="collapseExample">
        <div class="card card-body text-dark">
          {comments.map((massage)=>{
            return(
              <Comments massage={massage}/>
            )
            })}           
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return({Details : state.webState})
}

export default connect(mapStateToProps)(Comment)