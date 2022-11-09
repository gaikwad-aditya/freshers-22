import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const UserLogin = (props) => {
      const history = useHistory()
      const {booking} = props.Details
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const verify = ()=>{
            let flag = 0
            booking.map((data)=>{
                  if(email === data.email && password === data.password){
                        flag = 1
                  }
            })
            if(flag === 1){
                  alert('Successfully Log In!')
                  history.push('/hotelList')
            }
            else{
                  alert('Enter valid E-mail or Password')
            }
      }

      return (
            <div className='container my-4'>
            <h1 className='text-center' >Customer </h1>
            
            <div className="row g-5 ">
                  <div className="col"></div>
                  <div className="col">
                        <p className='text-center h3 my-2' > Log In</p>
                        <div >
                              <label htmlFor="" className="form-label">Email</label>
                              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} className="form-control" placeholder='xxxxx@zzz.com'/>
                        </div>
                        <div className='mt-2'>
                              <label htmlFor="" className="form-label">Password</label>
                              <input onChange={(e) => {setPassword(e.target.value)}} type="password" value={password} className="form-control" placeholder='Abcd@123'/>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                              <button onClick={verify} className="btn btn-primary">Log in</button>
                        </div>
                        <br />
                        <div class="text-center">
                              <p>Not a member? <Link to="/userSignUp">Register</Link></p>
                        </div>
                  </div>
                  <div className="col"></div>
            </div>
      </div>
      )
}

const mapStateToProps = (state) =>{
      return({Details : state.booking})
}

export default connect(mapStateToProps)(UserLogin)