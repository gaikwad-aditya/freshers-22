import React from 'react'
import { useState } from 'react'
import image from '../img/star.png'


function Question4() {
      const [rating, setRating] = useState(0) 
      const [arr] = useState([])
      const showStar = ()=>{
            const n = arr.length
            if(n > 0){
                  for(let j = 0; j < n; j++){   
                        arr.pop() 
                  }
            }
            for(let i = 0; i < rating; i++){   
                  arr.push(i)
            }
            setRating(0)
      }
      
      return (
          <div className='container'>
                  <h1 style={{ textAlign: 'center', margin: 10 }}>Star Rating</h1>
                  <div className='row g-3'>
                        <div className="col-md-9">
                              <label htmlFor="" className="form-label">Rating</label>
                              <input onChange={(e)=>{setRating(Number(e.target.value))}} type="number" className="form-control"/>
                        </div>

                        <div className="col-md-3">
                              <br />
                              <button onClick={showStar} className="btn btn-warning">Show</button>
                        </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                        {arr.map((val)=>{
                              return(
                                    <span>
                                          <img style={{width: "50px", height: '50px'}} src={image} alt="star" />
                                    </span>
                              )
                        })}
                  </div>
          </div>
          
      )
}

export default Question4