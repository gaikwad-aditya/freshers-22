import React from 'react'

function PostTable(props) {
      const {posts} = props
      return (
      <table>
            <thead>
                  <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                  </tr>
            </thead>
            <tbody>
                  {posts.map((val) => {
                        return(
                        <tr>
                              <td>{val.userId}</td>
                              <td>{val.id}</td>
                              <td>{val.title}</td>
                              <td>{val.body}</td>
                        </tr>
                        )
                  })}
                  
            </tbody>
      </table>
      )
}
export default PostTable