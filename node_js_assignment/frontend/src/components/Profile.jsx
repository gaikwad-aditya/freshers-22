import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {

  const data = props.Details.webState
  const [user, setUser] = useState({})

  useEffect(()=>{
    getUser()
  })

  const getUser = () =>{
    axios.get(`http://localhost:3001/user/${data.id}`)
    .then((response)=>{
      setUser({...response.data})
    })
  } 
  console.log(data)

  const getGender = () => {
    const isMale = (user.gender === 'M')
    return (isMale ? "Male" : "Female")
  }

  return (
    <div className='my-4'>
      <div className=' w-50 mx-auto  bg-secondary shadow-lg rounded text-capitalize'>
        
        <h2 className='display-6 py-4 text-center'>Welcome {user.fName}</h2>
        
        <div className='pb-3 bg-white rounded-bottom'>
          
          <hr className='style6 mx-5 text-white'/>
          
          <div class="row medium text-center">
            <div className='col-sm'>
              <label for="staticEmail" class="col-form-label float-end">Email</label>
            </div>
            <div className='col-sm-2 '>
              <label for="staticEmail" class="col-form-label">:</label>
            </div>
            <div class="col-sm">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.eMail}/>
            </div >
          </div>
          
          <hr className='style5 mx-5'/>

          <div class="row medium text-center">
            <div className='col-sm'>
              <label for="staticEmail" class="col-form-label float-end">First Name</label>
            </div>
            <div className='col-sm-2 '>
              <label for="staticEmail" class="col-form-label">:</label>
            </div>
            <div class="col-sm">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.fName}/>
            </div >
          </div>
          
          <hr className='style5 mx-5'/>

          <div class="row medium text-center">
            <div className='col-sm'>
              <label for="staticEmail" class="col-form-label float-end">Last Name</label>
            </div>
            <div className='col-sm-2 '>
              <label for="staticEmail" class="col-form-label">:</label>
            </div>
            <div class="col-sm">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.lName}/>
            </div >
          </div>
          
          <hr className='style5 mx-5'/>

          <div class="row medium text-center">
            <div className='col-sm'>
              <label for="staticEmail" class="col-form-label float-end">Mobil No.</label>
            </div>
            <div className='col-sm-2 '>
              <label for="staticEmail" class="col-form-label">:</label>
            </div>
            <div class="col-sm">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.mobNo}/>
            </div >
          </div>
          
          <hr className='style5 mx-5'/>

          <div class="row medium text-center">
            <div className='col-sm'>
              <label for="staticEmail" class="col-form-label float-end">Gender</label>
            </div>
            <div className='col-sm-2 '>
              <label for="staticEmail" class="col-form-label">:</label>
            </div>
            <div class="col-sm">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={getGender()}/>
            </div >
          </div>
          
          <hr className='style5 mx-5'/>

          <div class="row medium text-center">
            <div className='col-sm'>
              <label for="staticEmail" class="col-form-label float-end">address</label>
            </div>
            <div className='col-sm-2 '>
              <label for="staticEmail" class="col-form-label">:</label>
            </div>
            <div class="col-sm">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.address+" - "+user.zip}/>
            </div >
          </div>
       
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return({Details : state.webState})
}

export default connect(mapStateToProps)(Profile)