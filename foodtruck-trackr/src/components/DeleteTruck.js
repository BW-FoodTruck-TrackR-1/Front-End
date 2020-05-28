import React from "react";
import { connect, useDispatch } from "react-redux";
import deleteTruck  from "../actions/TruckActions";

const DTruck = (props) => {
  const dispatcher = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatcher(deleteTruck(props.truck))}
        className="button"
      >
        
      </button>

    </div>
  );
};

export default connect((state) => state, actionCreators)(DTruck);
