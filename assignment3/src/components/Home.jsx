import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='position-relative'>
      <div className='p-5 m-5 text-center rounded-5 bg-secondary text-white position-absolute'>
          <h1 >Welcome</h1>

          <p className='px-5 py-5 fs-5'>
          Designed for those who demand more to make the most out of their stay, Luxury hotel is the new age traveller's key to curated immersive experiences that enrich both business and leisure journeys. 
          Present in locations ranging from hills to beaches, and deserts to cities, our hotels skilfully blend together local aesthetics and modern day comforts along with ITC Hotels' renowned culinary expertise.
          </p>
          
          <div className='row g-3'>
            
            <div className="col-6">
              <p>Select CUSTOMER if you want to book hotel</p>
              <Link to={'/userLogin'}><button className="btn btn-warning">CUSTOMER</button></Link>
            </div>

            <div className="col-6">
              <p>Select ADMIN if your hotel owner</p>
              <Link to={'/login'}><button className="btn btn-warning">ADMIN</button></Link>
            </div>
          </div>
          
        </div>
      <div className="bg-image position-relative background-img ">
        
      </div>  
      
    </div>

  )
}

export default Home