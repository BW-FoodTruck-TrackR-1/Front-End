import React, { useState } from "react";
// import axios from "axios";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import styled from "styled-components";

import {
  H2,
  Form,
  Container,
  Button,
  Input,
  Label,
  StyledLink,
} from "./Styles.js";
import { Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function LoginOperator(props) {
  const history = useHistory();
  const [operator, setOperator] = useState({
    username: "",
    password: "",
    // operator: false,
  });

  const changeHandler = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setOperator(
      {
        ...operator,
        [name]: value,
      },
      console.log("operator value:", operator)
    );
  };

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted!");

  //   //const loginStateValue =  ;
  //   axios
  //     .post("https://reqres.in/api/users", operator)
  //     .then((res) => {
  //       const resData = res.data;
  //       console.log(resData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   setOperator({
  //     username: "",
  //     password: "",
  //     operator: false,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    //axiosWithAuth call
    axiosWithAuth()
    //posting our register data to the register api
      .post(`operators/auth/login`, operator)
      .then((res) => {
        //setting the token so were authorized to access content
        // localStorage.setItem('token', (res.data.payload))
        //sets the form blank again
        setOperator({
          // name:"",
          username: "",
          password: "",
          // email:"",
          // terms: false,
          // location:''
        });
        console.log(res.data);
        //pushes us to the /operatorDashboard
        history.push("/operator-dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Container>
        <H2>Operator</H2>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="username">Username</Label>
        </div>
        <div className="inputDiv">
          <Input
            name="username"
            placeholder="Username"
            value={operator.username}
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
            value={operator.password}
            onChange={changeHandler}
          />
        </div>
      </Container>
      {/* <Container>
        <div className="labelDiv">
          <Label htmlFor="operator">Operator?</Label>
        </div>
        <div className="inputDiv">
          <Input
            type="checkbox"
            name="operator"
            placeholder="operator"
            //value={operator.operator}
            onChange={changeHandler}
            checked={operator.operator}
          />
        </div>
      </Container> */}
      <Container>
        <Button>Login</Button>
      </Container>
      <Container>
        <StyledLink to="/login">Login Home</StyledLink>
      </Container>
    </Form>
  );
}

export default LoginOperator;
