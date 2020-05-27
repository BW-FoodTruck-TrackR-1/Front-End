import React from "react";
import { connect } from "react-redux";
import { getTrucks } from '../actions/TruckActions'
import Truck from './Truck'


const TruckCard = (props) => {

    // useEffect(() => {
    //     props.getTrucks()
    // }, [])

  return (
    <div>
      <div className='truck-card'>
          {props.truck.map((truck) => {
              return <Truck key={truck.id} truck={truck} />
          })}

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        truck: state.truck
    }
  }

  export default connect
  (mapStateToProps,{getTrucks})
  (TruckCard)