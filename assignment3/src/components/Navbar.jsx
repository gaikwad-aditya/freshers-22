import React from 'react'
import image from '../img/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className='container'>
                        <Link className="navbar-brand" to='/'>
                              <img src={image} width="40" height="35" class="d-inline-block align-top bg-secondary rounded-circle" alt=""/>
                              <span className='mb-0 h3 m-2'>Luxury.com</span>     
                        </Link>
                        
                        <div >
                              <ul className="navbar-nav justify-content-end">
                                    <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/userLogin">Costumer</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/login">Admin</Link>
                                    </li>

                                    <li className="nav-item ">
                                    <Link className="nav-link" to="/bookingList">Booking</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/hotelList">Hotels</Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
  )
}

export default Navbar