import React from "react";



const Truck = (props) => {

  return (
    <div>
        <p>{props.truck.name}</p>
        <p>{props.truck.cuisineType}</p>
        <p>{props.truck.customerRatingAvg}</p>
        <p>{props.truck.currentLocation.location}</p>
        <p>{props.truck.currentLocation.departureTime}</p>
        <p>{props.truck.nextLocation.location}</p>
        <p>{props.truck.nextLocation.arrivalTime}</p>
    </div>
  );
};


  export default Truck