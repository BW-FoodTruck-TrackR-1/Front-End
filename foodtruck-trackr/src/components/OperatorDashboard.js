import React, {useEffect} from "react";
import OperatorTrucks from './OperatorTrucks'
import AddTruck from './AddTruck'
import Deleter from './DeleteTruck'
import {getTrucks} from '../actions/TruckActions'
import { connect } from 'react-redux';

import Truck from './Truck'
import TruckCard from'./TruckCard'
import * as actionCreators from '../actions/TruckActions';

 function OperatorDashboard({getTrucks,trucks,getthattruck}){

    // useEffect(() => {
    //     getTrucks();
    // }, []);
    // console.log(getTrucks)
    // console.log(trucks)
  

return (
    <div>

        hi. this is the dashboard for operators
        <div>
{/* 
        {trucks.map(truck => (

        <p>{trucks.cuisineType}</p>
        )
        )
        } */}



        <AddTruck/>
        <Deleter/>
        {/* <Truck/> */}
        <TruckCard/>
            
            {/* <OperatorTrucks />
            <TruckForm /> */}
              return <div key={trucks} truck={trucks} ></div>

        </div>
    </div>

)

}

export default connect(
    state => state,
    actionCreators
)(OperatorDashboard);
