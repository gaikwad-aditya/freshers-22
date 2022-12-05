import React from 'react'

const CreateBlog = () => {
  return (
    <div className='container'>
      <div className='m-5'>
        <p className='text-center display-5'>Add Blog</p>
        <div class="mx-5 mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="email" class="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="mb-3 mx-5">
          <label for="exampleFormControlTextarea1" class="form-label">Content</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3 mx-5">
          <label for="exampleFormControlInput1" class="form-label">Tag</label>
          <input type="email" class="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog