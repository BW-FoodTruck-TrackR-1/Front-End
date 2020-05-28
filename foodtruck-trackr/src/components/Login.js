import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import LoginDiner from "./LoginDiner";
import LoginOperator from "./LoginOperator";

const Div = styled.div`
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
const H1 = styled.h1`
  font-size: 2rem;
  width: 500px;
  color: #ffc23b;
`;
const Container = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  const [dinerState, setDinerState] = useState();
  const [operatorState, setOperatorState] = useState();

  const dinerSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("https://reqres.in/api/users", dinerState)
      .then((response) => props.use(response.data))
      .catch((err) => console.log(err));
  };

  const operatorSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("https://reqres.in/api/users", operatorState)
      .then((response) => props.use(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <Div>
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
        <LoginDiner formSubmit={dinerSubmit} />
      </Route>
      <Route exact path="/login/operator">
        <LoginOperator formSubmit={operatorSubmit} />
      </Route>
    </Div>
  );
}

export default Login;
