import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import * as TruckActions from "../actions/TruckActions";
import Truck from './Truck'

const initialState = ([{}])

const TruckCard = (props) => {

  const [truck, setTruck] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const id = localStorage.getItem('id')

  
  useEffect(() => {
    setIsLoading(true)
    axiosWithAuth()
    .get(`http://localhost:3333/trucks`)
    .then(response => {
      setTruck(response.data)
      console.log(response.data)
      setIsLoading(false)
      console.log(truck)
  
    })
  },[])
 



  if (isLoading) return (
    <p>Loading ...</p>
  )

  return (
    <div>
      <div className="truck-card">
        {truck.map((trucks) => {
          return(
            <div>
              <h2>Truck Name: {trucks.name}</h2>
              <p>Cuisine Type: {trucks.cuisine_type}</p>
              <p>Customer Rating: {trucks.customer_rating}</p>
            </div> 

          
          )
        })}
      </div>
    </div>
  );

}


export default connect(
  state => state,
  TruckActions
)(TruckCard);
