// import React from "react";
// import { connect, useDispatch } from "react-redux";
// import deleteTruck  from "../actions/TruckActions";

// const DTruck = (props) => {
//   const dispatcher = useDispatch();

//   return (
//     <div>
//       <button
//         onClick={() => dispatcher(deleteTruck(props.truck))}
//         className="button"
//       >
        
//       </button>

//     </div>
//   );
// };

// export default connect((state) => state, actionCreators)(DTruck);


import React, { Component,useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {connect} from 'react-redux';
// import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
import{getTrucks, addTruck, deleteTruck} from '../actions/TruckActions'


import { connect } from 'react-redux';


class Deleter extends Component {
  constructor(){
    super();
    this.state = {
        cuisineType: "",
        customerRating: [],
        customerRatingAvg: [],
        imageOfTruck: [],
        menu: [
          {
            itemName: "",
            itemDescription: "",
            itemPhoto: [],
            itemPrice: "",
            customerRating: [],
            customerRatingAvg: [],
          },
        ],
      };
    }
  



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  delete = e => {
    this.setState({ id: e.target.value })
    this.props.deleteTruck(this.state.id);
    this.setState({ id: '' })
  }

  idSet = e => {
    this.setState({ id: e.target.value })
  }

  componentDidMount() {
    this.props.getTrucks()
  }

  render() {
    return (
      <div className="del">
              {this.props.truck.map(truck => {
                return <div key={truck.id}>
                
                  {(this.state.id === '') 
                  
                   (<button value={truck.id} onClick={this.idSet}>delete</button>) 
                   }
                </div>
              }
              )
              }
        </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks,
    fetching: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {
  getTruck,
  addTruck,
  deleteTruck
})(Deleter);
