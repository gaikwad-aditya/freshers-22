import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

function BookingList(props) {
  const [booking, setBooking] = useState(props.Detail.booking)

  const categories = (e)=>{
    const filterBooking = props.Detail.booking.filter((data)=>{
      if(Number(e.target.value) === -1){
        return true;
      }
      return data.cancel === Number(e.target.value)
    })
    setBooking(filterBooking)
  }

  return (
    <div className='container'>
      <h1 className="text-center my-3">Booking List</h1>
      <div>
        <div className="d-flex justify-content-center m-4">
          <div className="mx-5">
            <button onClick={categories} value={-1} className="btn btn-warning">All</button>
          </div>
          <div className="mx-5">
            <button onClick={categories} value={1} className="btn btn-warning">Cancelled</button>
          </div>
          <div className="mx-5">
            <button onClick={categories} value={0} className="btn btn-warning">Booked</button>
          </div>
        </div>
        <table className="table mb-5 text-center table-striped">
          <thead className='table-dark'>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Zip</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((user)=>{
              return(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                  <td>{user.zip}</td>
                  <td>{user.contact}</td>
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

const mapStateToProps= (state)=>{
      return{Detail : state.booking}
}

export default connect(mapStateToProps)(BookingList)