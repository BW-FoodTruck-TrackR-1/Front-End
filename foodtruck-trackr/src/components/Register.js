import React, {useState} from 'react';
import axios from 'axios';
import Diner from './Diner.js';
import Operator from './Operator.js';
import {Route, Link} from "react-router-dom";
import styled from 'styled-components';



const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        background-color: #c23B21;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin-left: 15px;
        margin-right: 40px;
    }`
export default function Register(props){
const[formstate, setformstate]=useState()
const formSubmit = e =>{
    e.preventDefault();
    console.log("form submitted");
    axios
        .post('https://reqres.in/api/users', formstate)
        .then(response => props.use(response.data))
        .catch(err => console.log(err));
}



    return(
        <div>
            
    <StyledLink to="/dinerreg"> Diner registration</StyledLink>
    
    <StyledLink to="/operatorreg">Operator registration</StyledLink>
    <Route path="/dinerreg">
        <Diner 
            formSubmit={formSubmit} 
            />
    </Route>
   <Route path="/operatorreg">
        <Operator 
            formSubmit={formSubmit} 
             />
    </Route>
        </div>
    )
}