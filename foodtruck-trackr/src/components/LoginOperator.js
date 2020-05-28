import React, { useState } from "react";
// import axios from "axios";
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

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

function LoginOperator(props) {

  const history = useHistory()
  const [operator, setOperator] = useState({
    username: "",
    password: "",
    // operator: false,
  });

  const changeHandler = (e) => {
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
    e.preventDefault()
    //axiosWithAuth call
    axiosWithAuth()
    //posting our register data to the register api
      .post(`https://food-truck-back-end.herokuapp.com/operators/login`, operator)
      .then((res) => {
        //setting the token so were authorized to access content
        // localStorage.setItem('token', (res.data.payload))
        //sets the form blank again
        setOperator({
            // name:"",
            username:"",
            password:"",
            // email:"",
            // terms: false,
            // location:''
        })
        console.log(res.data)
        //pushes us to the /operatorDashboard
        history.push('/operator-dashboard')

      })
      .catch(err => console.log(err)) 


  }


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
