import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const H1 = styled.h1`
  font-size: 2rem;
  width: 500px;
  color: #ffc23b;
`;
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
const StyledLink2 = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #c23b21;
  height: 40px;
  width: 60px;
  background-color: #fecb00;
  border-radius: 5px;
  position: relative;
  left: 220px;
  bottom: 100px;
`;

function Login(props) {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [diner, setDiner] = useState({
    username: "",
    password: "",
    diner: false,
  });

  const [operator, setOperator] = useState({
    username: "",
    password: "",
    operator: false,
  });

  const changeHandlerDiner = (e) => {
    e.preventDefault();
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDiner(
      {
        ...diner,
        [e.target.name]: value,
      },
      console.log("diner value:", diner)
    );
  };
  const changeHandlerOperator = (e) => {
    e.preventDefault();
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setOperator(
      {
        ...operator,
        [e.target.name]: value,
      },
      console.log("operator value:", operator)
    );
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
      <Route exact path="/login">
        <Container>
          <div>
            <H1>
              FoodTruck TrackR
              <br />
              Login
            </H1>
          </div>
        </Container>
        <Container>
          <div>
            <StyledLink to="/login/diner">Diner</StyledLink>
            <StyledLink to="/login/operator">Operator</StyledLink>
          </div>
          <StyledLink2 to="/register">Sign Up</StyledLink2>
        </Container>
      </Route>
      <Route exact path="/login/diner">
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
          <div className="labelDiv">
            <Label htmlFor="diner">Diner?</Label>
          </div>
          <div className="inputDiv">
            <Input
              type="checkbox"
              name="diner"
              placeholder="diner"
              value={diner.diner}
              onChange={changeHandlerDiner}
              checked={diner.diner}
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
          <div className="labelDiv">
            <Label htmlFor="operator">Operator?</Label>
          </div>
          <div className="inputDiv">
            <Input
              type="checkbox"
              name="operator"
              placeholder="operator"
              //value={operator.operator}
              onChange={changeHandlerOperator}
              checked={operator.operator}
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
