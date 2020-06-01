import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register.js";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import AddTruck from "./components/AddTruck";
import Operator from "./components/Operator";
import Diner from "./components/Diner";
import OperatorDashboard from "./components/OperatorDashboard";
import DinerDashboard from "./components/DinerDashboard";
import { StyledLinkHome as StyledLink } from './components/Styles'
import {useHistory} from 'react-router-dom'



function App() {
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
      <PrivateRoute exact path="/truck" component={AddTruck} />
      <PrivateRoute exact path="/operator-dashboard" component={OperatorDashboard} />
      <PrivateRoute exact path='diner-dashboard' component={DinerDashboard} />
    </div>
  );
}

export default App;