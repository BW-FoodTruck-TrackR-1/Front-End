import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import{H2, Form, Container, Button, Input, Label, StyledLink} from "./Styles.js"





function LoginDiner(props) {
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

  return (
    <Form autoComplete="off" onSubmit={(e) => props.formSubmit(e)}>
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
