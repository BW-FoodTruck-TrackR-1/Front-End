import React, { useState } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";

const H2 = styled.h2`
  font-size: 1.8rem;
  width: 500px;
  color: #ffc23b;
`;
const Form = styled.form`
  margin: auto;
  margin-top: 125px;
  padding: 50px;
  width: 500px;
  height: 600px;
  background-color: #c23b21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50;
  left: 50;
`;
const Container = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  height: 60px;
  width: 150px;
  background-color: #fecb00;
  border-radius: 5px;
`;
const Input = styled.input`
  height: 20px;
  width: 200px;
`;
const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
  color: #f7e976;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #c4c4c4;
  margin: 10px;
`;

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
