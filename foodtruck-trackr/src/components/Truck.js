import React from "react";
import { favTruck } from "../actions/TruckActions";



const Truck = (props) => {

  return (
      <div>


    <div>
        <p>{props.truck.name}</p>
        <p>{props.truck.cuisineType}</p>
        <p>{props.truck.customerRatingAvg}</p>
        <p>{props.truck.currentLocation.location}</p>
        <p>{props.truck.currentLocation.departureTime}</p>
        <p>{props.truck.nextLocation.location}</p>
        <p>{props.truck.nextLocation.arrivalTime}</p>
    </div>
    <div>
        <button onClick={() => favTruck(props.truck)}>Add To Favorites</button>
    </div>
    </div>
  );
};


  export default Truck