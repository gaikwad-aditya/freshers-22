import React from "react"
import {connect} from 'react-redux'

function ListHotel(props) {
      const {dummyDetails} = props.Detail
      return (
      <div className='container'>
            <h1 className="text-center my-3">Hotel List</h1>
            <div>
                  <table className="table mb-5 text-center table-striped">
                        <thead className="table-dark">
                              <tr>
                                    <th scope="col">Hotel ID</th>
                                    <th scope="col">Hotel Name</th>
                                    <th scope="col">Star Rating</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Zip</th>
                                    <th scope="col">Owner First Name</th>
                                    <th scope="col">Owner Last Name</th>
                                    <th scope="col">Contact No</th>
                                    <th scope="col">Email</th>
                              </tr>
                        </thead>
                        <tbody>
                              {dummyDetails.map((user)=>{
                                    return(
                                          <tr>
                                                <td>{user.id}</td>
                                                <td>{user.hotelName}</td>
                                                <td>{user.starRating}</td>
                                                <td>{user.address}</td>
                                                <td>{user.zip}</td>
                                                <td>{user.fName}</td>
                                                <td>{user.lName}</td>
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
      return{Detail : state.dummyDetails}
}

export default connect(mapStateToProps)(ListHotel)