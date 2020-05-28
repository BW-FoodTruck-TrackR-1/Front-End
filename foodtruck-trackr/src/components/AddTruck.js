import React from "react";
import { connect, useDispatch } from "react-redux";
import addTruck  from "../actions/TruckActions";

const Truck = (props) => {
  const dispatcher = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatcher(addTruck(props.truck))}
        className="button"
      >
        
      </button>

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

export default connect((state) => state, actionCreators)(Truck);
