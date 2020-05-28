import React from "react";
import { connect } from "react-redux";
import * as TruckActions from '../actions/TruckActions'
import Truck from './Truck'
import { useEffect, useState } from "react";


const TruckCard = (props) => {
  // const [truck, setTruck] = useState({})
  const {getTrucks} = props


    // useEffect(() => {
    //     setTruck(props.truck)
    // }, [props.truck])
    getTrucks()

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
  (mapStateToProps,TruckActions)
  (TruckCard)