import { useState } from "react"
import { Link } from "react-router-dom"

function Register(props) {
      // const history = useHistory()
      // const id = props.Details.booking[props.Details.booking.length-1].id
      const id = 0
      const [fName, setFName] = useState("")
      const [lName, setLName] = useState("")
      const [address, setAddress] = useState("")
      const [zip, setZip] = useState("")
      const [gender, setGender] = useState("")
      const [contact, setContact] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [conPassword, setConPassword] = useState("")

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
                  const detail = {id: id+1, cancel : 0, gender: gender, fName: fName, lName : lName, address : address, zip : zip, contact: contact, email : email, password : password}
                  // props.addUserDetail(detail)
                  alert("Data is successfully added!")
                  setFName('')
                  setLName('')
                  setAddress('')
                  setZip('')
                  setContact('')
                  setEmail('')
                  setPassword('')
                  setConPassword('')

                  // history.push('/userLogin')
            }
      }

      return (
      <div className='container'>
            <p className='text-center display-5 my-4'>Sign Up</p>
            
            <div className="row g-3">
                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input onChange={(e)=>{setFName(e.target.value)}} type="text" value={fName} className="form-control"/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input onChange={(e) => {setLName(e.target.value)}} type="text" value={lName} className="form-control"/>
                  </div>

                  <div className="col-md-7">
                        <label htmlFor="" className="form-label">Address</label>
                        <input onChange={(e)=>{setAddress(e.target.value)}} type="text" value={address} className="form-control"/>
                  </div>

                  <div className="col-md-3">
                        <label htmlFor="" className="form-label">Zip</label>
                        <input onChange={(e) => {setZip(Number(e.target.value))}} type="number" value={zip} className="form-control"/>
                  </div>
                  
                  <div className="col-md-2">
                        <label htmlFor="" className="form-label">Gender</label>
                        <input onChange={(e) => {setGender(e.target.value)}} type="text" value={gender} className="form-control" placeholder='M/F'/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Mobile No</label>
                        <input onChange={(e)=>{setContact(Number(e.target.value))}} type="Tel" value={contact} className="form-control"/>
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

                  <div className="col-12 d-flex justify-content-center">
                              <button onClick={addDetail} className="btn btn-success">Sign Up</button>
                  </div>
                  <br />
                  <div class="text-center">
                        <p>Already member? <Link to="/login">Log In</Link></p>
                  </div>
            </div>
            <br />
      </div>
      )
}


export default Register