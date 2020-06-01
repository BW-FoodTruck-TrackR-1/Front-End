import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register.js";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import AddTruck from "./components/AddTruck";
import Operator from "./components/Operator";
import Diner from "./components/Diner";
import TruckCard from './components/TruckCard'
import OperatorDashboard from "./components/OperatorDashboard";
import DinerDashboard from "./components/DinerDashboard";
import { StyledLinkHome as StyledLink } from './components/Styles'
import {useHistory} from 'react-router-dom'
import * as TruckActions from './actions/TruckActions'
import { connect } from 'react-redux'
import Home from './components/Home'

const mapStateToProps = (state) => {
  return {
    trucks: state.trucks,
    truckid: state.truckid
  };
};


function App(props) {
  const history = useHistory()
  const logOut = () => {
    localStorage.removeItem('token')
    history.push('/')
  }


  return (
    <div className="App">
      <StyledLink onClick={logOut}>Logout</StyledLink>
      <StyledLink to="/dinerreg"> Diner registration</StyledLink>
      <StyledLink to="/operatorreg">Operator registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <Route path="/dinerreg">
        <Diner/>
      </Route>
      <Route exact path="/operatorreg">
        <Operator/>
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <PrivateRoute exact path="/truck" component={AddTruck} />
      <PrivateRoute exact path="/operator-dashboard" component={OperatorDashboard} />
      <PrivateRoute exact path='diner-dashboard' component={DinerDashboard} />
      <PrivateRoute exact path='/truck-list' component={TruckCard} trucks={props.trucks} />

    </div>
  );
}

export default connect (
  (mapStateToProps), TruckActions
)(App)