import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const H1 = styled.h1`
  font-size: 2rem;
  width: 500px;
  color: #ffc23b;
`;
const Form = styled.form`
  margin: auto;
  margin-top: 50px;
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
const Button2 = styled.button`
  height: 40px;
  width: 60px;
  background-color: #fecb00;
  border-radius: 5px;
  position: relative;
  left: 220px;
  bottom: 100px;
`;
const Input = styled.input`
  height: 20px;
  width: 200px;
`;
const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
  color: #f7e976;
  padding: 50px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #c4c4c4;
  margin: 10px;
`;

function Login(props) {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
    diner: false,
    operator: false,
  });

  const [diner, setDiner] = useState({
    username: "",
    password: "",
  });

  const [operator, setOperator] = useState({
    username: "",
    password: "",
  });

  const changeHandlerDiner = (e) => {
    e.preventDefault();
    setDiner({
      ...diner,
      [e.target.name]: e.target.value,
    });
  };
  const changeHandlerOperator = (e) => {
    e.preventDefault();
    setOperator({
      ...operator,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    //const loginStateValue =  ;
    axios
      .post("https://reqres.in/api/users", loginState)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setDiner({
      username: "",
      password: "",
    });
    setOperator({
      username: "",
      password: "",
    });
    setLoginState({
      username: "",
      password: "",
      diner: false,
      operator: false,
    });
  };

  return (
    <Form autoComplete="off" onSubmit={(e) => formSubmit(e)}>
      <Container>
        <div>
          <H1>
            FoodTruck TrackR
            <br />
            Login
          </H1>
        </div>
      </Container>
      <Route exact path="/login">
        <Container>
          <div>
            <StyledLink to="/login/diner">Diner</StyledLink>
            <StyledLink to="/login/operator">Operator</StyledLink>
          </div>
          <Button2>Sign Up</Button2>
        </Container>
      </Route>
      <Route exact path="/login/diner">
        <Container>
          <div className="labelDiv">
            <Label htmlFor="username">Username</Label>
          </div>
          <div className="inputDiv">
            <Input
              name="username"
              placeholder="Username"
              value={diner.username}
              onChange={changeHandlerDiner}
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
              placeholder="password"
              value={diner.password}
              onChange={changeHandlerDiner}
            />
          </div>
        </Container>
        <Container>
          <Button>Login</Button>
        </Container>
        <Container>
          <StyledLink to="/login">Login Home</StyledLink>
        </Container>
      </Route>
      <Route exact path="/login/operator">
        <Container>
          <div className="labelDiv">
            <Label htmlFor="username">Username</Label>
          </div>
          <div className="inputDiv">
            <Input
              name="username"
              placeholder="Username"
              value={operator.username}
              onChange={changeHandlerOperator}
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
              placeholder="password"
              value={operator.password}
              onChange={changeHandlerOperator}
            />
          </div>
        </Container>
        <Container>
          <Button>Login</Button>
        </Container>
        <Container>
          <StyledLink to="/login">Login Home</StyledLink>
        </Container>
      </Route>
    </Form>
  );
}

export default Login;
