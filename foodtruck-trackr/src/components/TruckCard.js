import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import {getTrucks, deleteTruck} from "../actions/TruckActions";
import Truck from './Truck'
// import DeleteTruck from "./DeleteTruck";


const TruckCard = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [truckState, setTruckState] = useState([{}])

  
  useEffect(() => {
    setIsLoading(true)
      props.getTrucks()
      setTruckState(props.trucks)
      setIsLoading(false)
  },[props.trucks])

  

  // const deleteTruck = () => {
  //   axiosWithAuth()
  //   .delete(`http://localhost:3333/trucks/${truck.id}`)
  //   .then(res => console.log(res.data))
  // }
 



  if (isLoading) return (
    <p>Loading ...</p>
  )

  return (
    <div>
      <div className="truck-card">
        <p>
          {props.truck.map((truck) => {
            return <Truck key={truck.id} truck={truck}/> 
          })}
        </p>
      </div>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
      truck: state.truck,
  }
}

export default connect
(mapStateToProps,{getTrucks})
(TruckCard);
