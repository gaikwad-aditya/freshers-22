import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Login(props) {
      // const history = useHistory()
      // const {dummyDetails} = props.Details
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const verify = ()=>{
            // let flag = 0
            // dummyDetails.map((data)=>{
            //       if(email === data.email && password === data.password){
            //             flag = 1
            //       }
            // })
            // if(flag === 1){
            //       alert('Successfully Log In!')
            //       // history.push('/bookingList')
            // }
            // else{
            //       alert('Enter Valid E-mail or Password')
            // }
      }

      return (
            <div className='container my-4'>
            
            <div className="row g-5 ">
                  <div className="col"></div>
                  <div className="col">
                        <p className='text-center display-5 my-2' > Log In</p>
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
                              <button onClick={verify} className="btn btn-primary">Log In</button>
                        </div>
                        <br />
                        <div class="text-center">
                              <p>Not a member? <Link to="/register">Sign Up</Link></p>
                        </div>
                  </div>
                  <div className="col"></div>
            </div>
      </div>
      )
}

export default Login