import React, { useState } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";
import{H2, Form, Container, Button, Input, Label, StyledLink} from "./Styles.js"





function LoginDiner(props) {
  const history = useHistory()
  const [diner, setDiner] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setDiner(
      {
        ...diner,
        [name]: value,
      },
      console.log("diner value:", diner)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    //axiosWithAuth call
    axiosWithAuth()
    //posting our register data to the register api
      .post(`https://food-truck-back-end.herokuapp.com/diners/login`, diner)
      .then((res) => {
        //setting the token so were authorized to access content
        // localStorage.setItem('token', (res.data.payload))
        //sets the form blank again
        setDiner({
            // name:"",
            username:"",
            password:"",
            // email:"",
            // terms: false,
            // location:''
        })
        console.log(res.data)
        //pushes us to the /dinerDashboard
        history.push('/diner-dashboard')

      })
      .catch(err => console.log(err)) 


  }


  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Container>
        <H2>Diner</H2>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="username">Username</Label>
        </div>
        <div className="inputDiv">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={diner.username}
            onChange={changeHandler}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="password">Password</Label>
        </div>
        <div className="inputDiv">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={diner.password}
            onChange={changeHandler}
          />
        </div>
      </Container>
      <Container>
        <Button>Login</Button>
      </Container>
      <Container>
        <StyledLink to="/login">Login Home</StyledLink>
      </Container>
    </Form>
  );
}

export default LoginDiner;
