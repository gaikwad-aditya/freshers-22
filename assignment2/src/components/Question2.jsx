import React, {useState} from 'react'


function Question2() {
      const [fName, setFName] = useState("")
      const [lName, setLName] = useState("")
      const [address, setAddress] = useState("")
      const [zip, setZip] = useState("")
      const [mobNo, setMobNo] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [conPassword, setConPassword] = useState("")
      const [details, setDetails] = useState([])

      const addDetail = (e)=>{
            if(email.length === 0){
                  alert('Enter valid E-mail')
            }
            else if(password.length === 0){
                  alert('Enter valid password')
            }
            else if(password !== conPassword){
                  alert('Enter same passwords')
            }
            else{
                  console.log(`First Name: ${fName}`)
                  console.log(`Last Name: ${lName}`)
                  console.log(`Address: ${address}`)
                  console.log(`zip: ${zip}`)
                  console.log(`Mobile No: ${mobNo}`)
                  console.log(`Email: ${email}`)
                  console.log(`Password: ${password}`)
                  const detail = {fName: fName, lName : lName, address : address, zip : zip, mobNo: mobNo, email : email, password : password}
                  setDetails([...details, detail])
                  e.preventDefault()
                  setFName('')
                  setLName('')
                  setAddress('')
                  setZip('')
                  setMobNo('')
                  setEmail('')
                  setPassword('')
                  setConPassword('')
            }
      }

      return (
      <div className='container'>
            <h1 style={{ textAlign: 'center', margin: 10 }}>Sign Up</h1>
            
            <div className="row g-3">
                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input onChange={(e)=>{setFName(e.target.value)}} type="text" value={fName} className="form-control"/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input onChange={(e) => {setLName(e.target.value)}} type="text" value={lName} className="form-control"/>
                  </div>

                  <div className="col-md-9">
                        <label htmlFor="" className="form-label">Address</label>
                        <input onChange={(e)=>{setAddress(e.target.value)}} type="text" value={address} className="form-control"/>
                  </div>

                  <div className="col-md-3">
                        <label htmlFor="" className="form-label">Zip</label>
                        <input onChange={(e) => {setZip(Number(e.target.value))}} type="number" value={zip} className="form-control"/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Mobile No</label>
                        <input onChange={(e)=>{setMobNo(Number(e.target.value))}} type="Tel" value={mobNo} className="form-control"/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} className="form-control" placeholder='xxxxx@zzz.com'/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" value={password} className="form-control" placeholder='Abcd@123'/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input onChange={(e) => {setConPassword(e.target.value)}} type="password" value={conPassword} className="form-control" placeholder='Abcd@123'/>
                  </div>

                  <div className="col-12">
                        <button onClick={addDetail} className="btn btn-success">Sign up</button>
                  </div>
            </div>

            <div>
                  <table className="table table-striped">
                        <thead>
                              <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Zip</th>
                                    <th scope="col">Mobile No</th>
                                    <th scope="col">Email</th>
                              </tr>
                        </thead>
                        <tbody>
                              {details.map((user)=>{
                                    return(
                                          <tr>
                                                <td>{user.fName}</td>
                                                <td>{user.lName}</td>
                                                <td>{user.address}</td>
                                                <td>{user.zip}</td>
                                                <td>{user.mobNo}</td>
                                                <td>{user.email}</td>
                                          </tr>
                                    )
                              })}
                        </tbody>
                  </table>
            </div>
      </div>
      )
}

export default Question2