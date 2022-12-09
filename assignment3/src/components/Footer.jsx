import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
            <footer className="bg-dark text-center text-white">
            
            <div className="container p-4">
            
                  <section className="mb-4">

                        <p className='display-6'>Follow Us</p>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
                              <i className="fa fa-facebook"></i>
                        </a>

                  
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/accounts/login/" role="button">
                              <i className="fa fa-instagram"></i>
                        </a>

                  
                        <a className="btn btn-outline-light btn-floating m-1" href="https://accounts.google.com/v3/signin/identifier?dsh=S-1072776039%3A1667461224577801&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAtNyiucXu1Ue1A1DS1IC3vbwDh3P98JcedVRJFNzAFt2isHb7wTvz-DMU71ryxgGTdVmLgJcw" role="button">
                              <i className="fa fa-google"></i>
                        </a>
                        
                  </section>
                  

                  
                  
                  <section className="">
                  
                        <div className="row">
                  
                              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                    <ul className="list-unstyled mb-0">
                                          <li>
                                                <Link to="/" className="text-white" style={{textDecoration:'none'}}>Home</Link>
                                          </li>
                                    </ul>
                              </div>

                              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                    <ul className="list-unstyled mb-0">
                                          <li>
                                                <Link to="/userLogin" className="text-white" style={{textDecoration:'none'}}>Customer</Link>
                                          </li>
                                    </ul>
                              </div>
                        
                              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                    <ul className="list-unstyled mb-0">
                                          <li>
                                                <Link to="/login" className="text-white"style={{textDecoration:'none'}}>Admin</Link>
                                          </li>
                                    </ul>
                              </div>
                        
                              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                    <ul className="list-unstyled mb-0">
                                          <li>
                                          <Link to="/hotelList" className="text-white" style={{textDecoration:'none'}}>Hotels</Link>
                                          </li>
                                    </ul>
                              </div>
                        
                        </div>
                  
                  </section>
                  
            </div>
            

            
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright: <strong>Luxury.com</strong>
            </div>
            
            </footer>
            
      </div>
  )
}

export default Footer