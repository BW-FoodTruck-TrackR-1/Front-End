import styled from "styled-components";
import {Link} from "react-router-dom";

export const Div = styled.div`
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
 export const H1 = styled.h1`
  font-size: 2rem;
  width: 500px;
  color: #ffc23b;
`;
export const H2 = styled.h2`
font-size: 1.8rem;
width: 500px;
color: #ffc23b;
`;
export const Container = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #c4c4c4;
  margin: 10px;
`;
export const StyledLink2 = styled(Link)`
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

export const StyledLinkHome = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    background-color: #c23b21;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-left: 15px;
    margin-right: 40px;
  }
`;

export const Form = styled.form`
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

export const Button = styled.button`
height: 60px;
width: 150px;
background-color: #fecb00;
border-radius: 5px;
`;

export const Input = styled.input`
height: 20px;
width: 200px;
`;

export const Label = styled.label`
width: 100%;
font-size: 1.2rem;
color: #f7e976;
`;

export const SubDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;