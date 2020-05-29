import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {H2, Form, Container, Button, Input, Label, StyledLink} from "./Styles.js"



function LoginOperator(props) {
  const [operator, setOperator] = useState({
    username: "",
    password: "",
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

  return (
    <Form autoComplete="off" onSubmit={(e) => props.formSubmit(e)}>
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
