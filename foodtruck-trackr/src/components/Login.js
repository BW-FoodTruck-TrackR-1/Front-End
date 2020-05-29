import React, { useState } from "react";
import axios from "axios";
import { Route} from "react-router-dom";
import LoginDiner from "./LoginDiner";
import LoginOperator from "./LoginOperator";
import {Div, Container, H1, StyledLink, StyledLink2,} from "./Styles.js"


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