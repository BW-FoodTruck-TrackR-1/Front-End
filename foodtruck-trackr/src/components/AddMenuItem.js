import React from "react";
import { connect, useDispatch } from "react-redux";
import addMenuItem  from "../actions/MenuActions";

const MenuItem = (props) => {
  const dispatcher = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatcher(addMenuItem(props.menuitem))}
        className="button"
      >
        
      </button>

      <p>{props.menuitem.name}</p>
      <p>{props.menuitem.cuisineType}</p>
      <p>{props.menuitem.customerRatingAvg}</p>
      <p>{props.menuitem.currentLocation.location}</p>
      <p>{props.menuitem.currentLocation.departureTime}</p>
      <p>{props.menuitem.nextLocation.location}</p>
      <p>{props.menuitem.nextLocation.arrivalTime}</p>
    </div>
  );
};

export default connect((state) => state, actionCreators)(MenuItem);
