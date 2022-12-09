import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateBlog = (props) => {

  const data = props.Details.webState
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTag] = useState("")
  const navigate = useNavigate()
  

  const addBlog = ()=>{
    const date =  String(new Date())
    const blog = {title: title, body: body, tags: tags, date_time: date.slice(0,25), creator_id: data.id}
    axios.post("http://localhost:3001/blog/create", blog)
    .then((response)=> {
      navigate('/')
    })
  }

  return (
    <div className='container'>
      <div className='m-5'>
        <p className='text-center display-5'>Add Blog</p>
        <div class="mx-5 mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input onChange={(e)=>{setTitle(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="mb-3 mx-5">
          <label for="exampleFormControlTextarea1" class="form-label">Content</label>
          <textarea onChange={(e)=>{setBody(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3 mx-5">
          <label for="exampleFormControlInput1" class="form-label">Tag</label>
          <input onChange={(e)=>{setTag(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="text-center">
          <button onClick={addBlog} type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return({Details : state.webState})
}

export default connect(mapStateToProps)(CreateBlog)