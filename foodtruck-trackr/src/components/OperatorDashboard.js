import React, {useEffect} from "react";
import OperatorTrucks from './OperatorTrucks'
import AddTruck from './AddTruck'
import Deleter from './DeleteTruck'
import {getTrucks} from '../actions/TruckActions'
import { connect } from 'react-redux';

import Truck from './Truck'
import TruckCard from'./TruckCard'
import * as actionCreators from '../actions/TruckActions';

 function OperatorDashboard(props){
    useEffect(() => {
        props.getTrucks()
      },[props.trucks])
    

return (
    <div>

        hi. this is the dashboard for operators
        <div>

        <AddTruck/>
        {/* <Truck/> */}
        <TruckCard/>
        </div>
    </div>

)

}

export default connect(
    state => state,
    actionCreators
)(OperatorDashboard);
