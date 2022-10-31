import React from 'react'

function CarList(props) {
      const {car} = props
      return (
      <div>
            <ul>
                  <li>Model : {car.model}</li>
                  <li>Company : {car.company}</li>
                  <li>Price : {car.price}</li>
                  <li>Configuration </li>
                  <ul>
                        <li>Color : {car.configuration.color}</li>
                        <li>Fuel : {car.configuration.fuel}</li>
                        <li>Cylinder : {car.configuration.cylinder}</li>
                        <li>Fuel Tank Capacity : {car.configuration.fuelTankCapacity}</li>
                        <li>Mileage </li>
                        <ul>
                              <li>City : {car.configuration.mileage.city}</li>
                              <li>Highway : {car.configuration.mileage.highway}</li>
                        </ul> 
                  </ul>
                  <li>Features </li>
                  <ul>
                        {car.features.map((val)=>{
                        return <li>{val}</li>
                        })}
                  </ul>
            </ul>
      </div>
      )
}

export default CarList