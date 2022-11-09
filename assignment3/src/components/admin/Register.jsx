// import { connect } from 'react-redux'
import { useState } from "react"
import {connect} from "react-redux"
import { Link, useHistory } from "react-router-dom"
import addDetail from "../../actions/addDetail"

function Register(props) {
      const history = useHistory()
      const id = props.Details.dummyDetails[props.Details.dummyDetails.length-1].id
      const [fName, setFName] = useState("")
      const [lName, setLName] = useState("")
      const [hotelName, setHotelName] = useState("")
      const [starRating, setStarRating] = useState("")
      const [address, setAddress] = useState("")
      const [zip, setZip] = useState("")
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
                  const detail = {id: id+1, fName: fName, lName : lName, hotelName: hotelName, starRating: starRating, address : address, zip : zip, contact: contact, email : email, password : password}
                  props.addDetail(detail)
                  alert("Data is successfully added!")
                  setFName('')
                  setLName('')
                  setHotelName('')
                  setStarRating('')
                  setAddress('')
                  setZip('')
                  setContact('')
                  setEmail('')
                  setPassword('')
                  setConPassword('')
                  history.push('/login')
            }
      }

      return (
      <div className='container'>
            <h1 className="text-center my-3">Register Hotel</h1>
            <p className='text-center h3 my-4'>Sign Up</p>
            
            <div className="row g-3">
                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Owner First Name</label>
                        <input onChange={(e)=>{setFName(e.target.value)}} type="text" value={fName} className="form-control"/>
                  </div>

                  <div className="col-md-6">
                        <label htmlFor="" className="form-label">Owner Last Name</label>
                        <input onChange={(e) => {setLName(e.target.value)}} type="text" value={lName} className="form-control"/>
                  </div>
                  
                  <div className="col-md-10">
                        <label htmlFor="" className="form-label">Hotel Name</label>
                        <input onChange={(e)=>{setHotelName(e.target.value)}} type="text" value={hotelName} className="form-control"/>
                  </div>

                  <div className="col-md-2">
                        <label htmlFor="" className="form-label">Star Rating</label>
                        <input onChange={(e) => {setStarRating(e.target.value)}} type="text" value={starRating} className="form-control"/>
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
                        <label htmlFor="" className="form-label">Contact No</label>
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

                  <div className="d-flex justify-content-center">
                              <button onClick={addDetail} className="btn btn-success">Sign up</button>
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


const mapStateToProps = (state) =>{
      return({Details : state.dummyDetails})
}

const mapDispatchToProps = (dispatch) =>{
      return {addDetail : (detail)=>dispatch(addDetail(detail))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)