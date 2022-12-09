import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import addDetail from '../action/action1'

function Login(props) {
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const navigate = useNavigate()

      const verify = ()=>{
            axios.post("http://localhost:3001/user/signin",{eMail: email, password: password})
            .then((response)=> {
                  if (response.data){
                        const detail = {id: response.data.id, fName: response.data.fName, isLogin: true}
                        props.addDetail(detail)
                        navigate("/")
                  }
                  else{
                        alert(`E-mail or password is wrong`)
                  }
            })
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

const mapStateToProps = (state) =>{
      return({Details : state.webState})
}

const mapDispatchToProps = (dispatch) =>{
      return {addDetail : (detail)=>dispatch(addDetail(detail))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)