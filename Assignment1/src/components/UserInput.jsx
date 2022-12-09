import React from 'react'
import { useState } from 'react'

const UserInput = (props) => {
      const {posts} = props
      // const post = []
      const [userId, setUserId] = useState('')
      const [id, setId] = useState('')
      const [title, setTitle] = useState('')
      const [body, setBody] = useState('')

      const setValues = () =>{
            posts.push({userId, id, title, body})
            console.log(posts)
      }

      const readUserId = (e) => {
            setUserId(Number(e.target.value))
      }

      const readId = (e) => {
            setId(Number(e.target.value))
      }

      const readTitle = (e) => {
            setTitle(e.target.value)
      }

      const readBody = (e) => {
            setBody(e.target.value)
      }

      return (
      <div>
            <label htmlFor="">User ID</label>
            <input onChange = {readUserId}  type="number" />
            
            <label htmlFor="">ID</label>
            <input onChange = {readId}  type="number" />
            
            <label htmlFor="">Title</label>
            <input onChange = {readTitle}  type="text" />
            
            <label htmlFor="">Body</label>
            <input onChange = {readBody}  type="text" />

            <button onClick={setValues}>Add</button>

      </div>
      )
}

export default UserInput