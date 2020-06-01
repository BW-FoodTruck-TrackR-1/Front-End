import React, { useState, useEffect } from "react";
import * as TruckActions from '../actions/TruckActions'
import { connect } from 'react-redux'



const Truck = (props) => {

  const [truck, setTruck] = useState({})

  useEffect(() => {
      setTruck(props.trucks)
      console.log(props.trucks)
  }, [props.trucks])


  return (
      <div>


    <div>
        <p>{props.trucks.name}</p>
        {/* <p>{props.truck.cuisineType}</p>
        <p>{props.truck.customerRatingAvg}</p>
        <p>{props.truck.currentLocation.location}</p>
        <p>{props.truck.currentLocation.departureTime}</p>
        <p>{props.truck.nextLocation.location}</p>
        <p>{props.truck.nextLocation.arrivalTime}</p> */}
    </div>
    <div>
        {/* <button onClick={() => favTruck(props.truck)}>Add To Favorites</button> */}
    </div>
    </div>
  );
};


export default connect(
  state => state,
  TruckActions
)(Truck);