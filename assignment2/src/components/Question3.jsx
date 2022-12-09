import React from 'react'
import { useState } from 'react'

function Question3() {
      const [count, setCount] = useState(0)

      const increment = ()=>{
            setCount(count+1)
      }
      const decrement = ()=>{
            if(count === 0){
                  setCount(0)
            }
            else{
                  setCount(count-1)
            }
      }
      return (
      <div style={{textAlign : 'center'}}>
            <h1 style={{ textAlign: 'center', margin: 10 }}>Counter</h1>
            <br />
            <span >
                  <button onClick={increment} className="btn btn-secondary">+</button>
            </span>
            <span style={{ fontSize:'25px', margin:'10px',}}>{count}</span>
            <span>
                  <button onClick={decrement} className="btn btn-secondary">-</button>
            </span>
      </div>
      )
}

export default Question3