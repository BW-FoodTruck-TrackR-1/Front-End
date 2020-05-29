import React, {useState} from 'react';
import axios from 'axios';
import Diner from './Diner.js';
import Operator from './Operator.js';
import {Route, Link} from "react-router-dom";
import styled from 'styled-components';
import {StyledLink} from "./Styles.js"



export default function Register(props){
const[dinerState, setDinerState]=useState()
const[operatorState, setOperatorState]=useState()



const dinerSubmit = (formstate) =>{
    
    console.log("form submitted");
    axios
        .post('https://reqres.in/api/users', formstate)
        .then(response => {
            setDinerState(response.data)
            console.log(response, 'response')
        })
        
        .catch(err => console.log(err));

        
}

const operatorSubmit = (forms) =>{
    
    console.log("form submitted");
    axios
        .post('https://reqres.in/api/users', forms)
        .then(response => {
            setOperatorState(response.data)
            console.log(response, 'response')
        })
        .catch(err => console.log(err));
}




    return(
        <div>
            
    <StyledLink to="/dinerreg"> Diner registration</StyledLink>
    
    <StyledLink to="/operatorreg">Operator registration</StyledLink>
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
        </div>
    )
}