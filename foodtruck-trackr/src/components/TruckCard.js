import React from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
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
=======
import { getTrucks } from '../actions/TruckActions'
import Truck from './AddTruck'


const TruckCard = (props) => {

    // useEffect(() => {
    //     props.getTrucks()
    // }, [])
>>>>>>> 9ff00cd013900d7960ad2886547c19b400ffbd5f

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
<<<<<<< HEAD
  (mapStateToProps,TruckActions)
  (TruckCard)
=======
  (mapStateToProps,{getTrucks})
  (TruckCard)





>>>>>>> 9ff00cd013900d7960ad2886547c19b400ffbd5f
