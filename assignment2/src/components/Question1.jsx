import React, { useState } from 'react'

function Question1() {
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [details, setDetails] = useState([])

      const addDetail = ()=>{
            if(email.length === 0){
                  alert('Enter valid E-mail')
            }
            else if(password.length === 0){
                  alert('Enter valid password')
            }
            else{
                  console.log(`Email : ${email}`)
                  console.log(`password : ${password}`)

                  const detail = {email : email, password : password}
                  setDetails([...details, detail])
                  setEmail('')
                  setPassword('')
            }
      }

      return (
      <div className='container'>
            <h1 style={{ textAlign: 'center', margin: 10 }}>Log In</h1>
            
            <div className="row g-3">
                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} className="form-control" placeholder='xxxxx@zzz.com'/>
                  </div>
                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" value={password} className="form-control" placeholder='Abcd@123'/>
                  </div>
                  <div className="col-12">
                        <button onClick={addDetail} className="btn btn-primary">Log in</button>
                  </div>
            </div>

            <div>
                  <table className="table table-striped">
                        <thead>
                              <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                              </tr>
                        </thead>
                        <tbody>
                              {details.map((user)=>{
                              return(
                                    <tr>
                                          <td>{user.email}</td>
                                          <td>{user.password}</td>
                                    </tr>
                              )
                              })}
                        </tbody>
                  </table>
            </div>
      </div>
      )
}

export default Question1