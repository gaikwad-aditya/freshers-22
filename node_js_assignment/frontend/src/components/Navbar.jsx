import React from 'react';
import image from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import addDetail from '../action/action1';

function Navbar(props) {
      const data = props.Details.webState;
      const navigate = useNavigate()
      const IsLogin = ()=>{
            if(data.isLogin){
                  return (
                        <div className='navbar-nav justify-content-end'>
                              <li className="nav-item">
                              <a onClick={logOut} className="nav-link">Logout</a>
                              </li>
                        </div>
                  )
            }
            else{
                  return(
                        <div className='navbar-nav justify-content-end'>
                              <li className="nav-item">
                              <Link className="nav-link" to="/register">Sign Up</Link>
                              </li>
                              
                              <li className="nav-item">
                              <Link className="nav-link" to="/login">Log In</Link>
                              </li>
                        </div>
                  )
            }
      }
      const IsDisabled = ()=>{
            if(data.isLogin){
                  return(
                        <a class="nav-link dropdown-toggle text-capitalize" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Welcome {data.fName}
                        </a> 
                  )
            }
            else{
                  return(
                        <a class="nav-link disabled" href="#">
                              Welcome {data.fName}
                        </a>
                  )
            }
      }
      const logOut = () => {
            props.addDetail({})
            navigate('/')
      }

      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className='container'>   
                        <Link className="navbar-brand" to='/'>
                              <img src={image} width="40" height="40" class="d-inline-block align-top bg-white rounded-circle" alt=""/>
                              <span className='mb-0 h3 m-2'>BlogCamp</span>     
                        </Link>
                        
                        <div >
                              <ul className="navbar-nav justify-content-end">
                                    <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    
                                    <IsLogin/>

                                    <div className= "dropdown nav-item">
                                          
                                          <IsDisabled/>
                                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link class="dropdown-item" to="/createBlog">Create Blog</Link></li>
                                                <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
                                          </ul>
                                    </div>
                              </ul>
                        </div>
                  </div>
            </nav>
      )
}

const mapStateToProps = (state) =>{
      return({Details : state.webState})
}

const mapDispatchToProps = (dispatch) =>{
      return {addDetail : (detail)=>dispatch(addDetail(detail))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)