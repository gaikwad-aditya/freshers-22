import React from 'react'

const PostList = (props) => {

      const {posts} = props

      return (
        <ul>
          {
            posts.map((val)=>{
              return (                
                <li>
                  <ul>
                    <li>User ID: {val.userId}</li>
                    <li>ID: {val.id}</li>
                    <li>Title: {val.title}</li>
                    <li>Body: {val.body}</li>
                  </ul>
                </li>                
              )
          })}
        </ul>      
      )
}

export default PostList