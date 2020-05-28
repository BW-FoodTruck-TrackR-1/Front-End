import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import LoginDiner from "./LoginDiner";
import LoginOperator from "./LoginOperator";

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
const StyledLink3 = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #c23b21;
  height: 60px;
  width: 120px;
  background-color: #fecb00;
  border-radius: 5px;
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
    diner: false,
  });

  const [operator, setOperator] = useState({
    username: "",
    password: "",
    operator: false,
  });

  const changeHandlerDiner = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDiner(
      {
        ...diner,
        [name]: value,
      },
      console.log("diner value:", diner),
      console.log("checked!", e.target.checked)
    );
  };
  const changeHandlerOperator = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setOperator(
      {
        ...operator,
        [name]: value,
      },
      console.log("operator value:", operator)
    );
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");

    //const loginStateValue =  ;
    axios
      .post("https://reqres.in/api/users", loginState)
      .then((res) => {
        const resData = res.data;
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });

    setDiner({
      username: "",
      password: "",
      diner: false,
    });
    setOperator({
      username: "",
      password: "",
      operator: false,
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
        <LoginDiner />
      </Route>
      <Route exact path="/login/operator">
        <LoginOperator />
      </Route>
    </Form>
  );
}

export default Login;
