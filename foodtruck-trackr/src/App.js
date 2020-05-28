import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register.js";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import TruckForm from "./components/TruckForm";
import Operator from "./components/Operator";
import Diner from "./components/Diner";
import OperatorDashboard from "./components/OperatorDashboard";
import DinerDashboard from "./components/DinerDashboard";
import TruckCard from "./components/TruckCard";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    background-color: #c23b21;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-left: 15px;
    margin-right: 40px;
  }
`;

const Container = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <StyledLink to="/dinerreg"> Diner registration</StyledLink>
      <StyledLink to="/operatorreg">Operator registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <Route path="/dinerreg">
        <Diner
        // formSubmit={dinerSubmit}
        />
      </Route>
      <Route exact path="/operatorreg">
        <Operator
        // formSubmit={operatorSubmit}
        />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/truck">
        <TruckForm />
      </Route>
      <Route path="/operator-dashboard">
        <OperatorDashboard />
      </Route>
      <Route path="/diner-dashboard">
        <DinerDashboard />
      </Route>
      <TruckCard />
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import { connect } from 'react-redux';
// import { getTrucks, addTruck, deleteTruck } from '../actions/index'

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {

//       // // imageOfTruck:'',
//       // cuisineType: '',
//       // customerRatings: '',
//       // customerRatingAvg: '',
//       // // menu: [],
//       // itemName: '',
//       // itemDescription: '',
//       // itemPhotos: [],
//       // itemPrice: '',
//       // customerRatings: '',
//       // customerRatingAvg: '',
//       // id: '',
//       // id: '',
//       // id: '',

//     };
//   }

//   addTruck = e => {
//     const truck = {
//       username: this.state.username,
//       age: this.state.age,
//       height: this.state.height
//     }
//     this.props.addSmurf(smurf)
//   }

//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   delete = e => {
//     this.setState({ id: e.target.value })
//     this.props.delSmurf(this.state.id);
//     this.setState({ id: '' })
//   }

//   idSet = e => {
//     this.setState({ id: e.target.value })
//   }

//   componentDidMount() {
//     this.props.getSmurfs()
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>SMURPH</h1>
//           {this.props.fetchingSmurfs ? (
//             <h3>loading...</h3>
//           ) : (
//             <ul>
//               {this.props.smurfs.map(smurf => {
//                 return <div key={smurf.name}>
//                   <h4>{smurf.name}</h4>
//                   <h6>age: {smurf.age}</h6>
//                   <h6>height: {smurf.height}</h6>
//                   {(this.state.id === '') ? (<button value={smurf.id} onClick={this.idSet}>delete</button>) : (<button onClick={this.delete}>confirm delete?</button>)}
//                 </div>
//               })}
//             </ul>)}
//             <div className="add-smurf">
//               <form className="fields"  onSubmit={this.addSmurf}>
//                 <input
//                   onChange={this.handleInputChange}
//                   placeholder="name"
//                   value={this.state.name}
//                   name="name"
//                 />
//                 <input
//                   onChange={this.handleInputChange}
//                   placeholder="age"
//                   value={this.state.age}
//                   name="age"
//                 />
//                 <input
//                   onChange={this.handleInputChange}
//                   placeholder="height"
//                   value={this.state.height}
//                   name="height"
//                 />
//               <button type="submit">Add to village!</button>
//               </form>
//             </div>
//         </div>

//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     smurfs: state.smurfs,
//     fetchingSmurfs: state.fetchingSmurfs
//   }
// }

// export default connect(mapStateToProps, {
//   getSmurfs,
//   addSmurf,
//   delSmurf
// })(App);
