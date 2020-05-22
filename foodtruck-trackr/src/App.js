import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getTrucks, addTruck, deleteTruck } from '../actions/index'


function App() {
    return (
      <Router>
        <div className='App'>
          {/* <Route exact path='/' component={xL} />
          <PrivateRoute path='/x' component={x} /> */}
        </div>
      </Router>
    );
  }
  
  export default App;
  