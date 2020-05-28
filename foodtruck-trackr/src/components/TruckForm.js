import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const H1 = styled.h1`
  font-size: 2rem;
  color: #ffc23b;
  text-align: center;
`;
const H2 = styled.h2`
  font-size: 1.4rem;
  color: #ffc23b;
  text-align: center;
`;
const Form = styled.form`
  margin: auto;
  margin-top: 50px;
  padding: 50px;
  width: 500px;
  height: auto;
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
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubDiv = styled.div`
  width: 100%;
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
  margin-top: auto;
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

function TruckForm() {
  const [truckState, setTruckState] = useState({
    cuisineType: "",
    customerRating: [],
    customerRatingAvg: [],
    imageOfTruck: [],
    menu: [
      {
        itemName: "",
        itemDescription: "",
        itemPhoto: [],
        itemPrice: "",
        customerRating: [],
        customerRatingAvg: [],
      },
    ],
  });
  const [menu, setMenu] = useState([
    {
      itemName: "",
      itemDescription: "",
      itemPhotos: [],
      itemPrice: "",
      customerRating: [],
      customerRatingAvg: [],
    },
  ]);
  console.log(truckState.menu);

  const changeHandler = (e) => {
    e.persist();
    e.preventDefault();
    setTruckState({
      ...truckState,
      [e.target.name]: e.target.value,
    });
  };

  const changeHandlerMenu = (e) => {
    e.persist();
    e.preventDefault();
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
    setTruckState({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    e.persist();
    setTruckState({
      file: URL.createObjectURL(e.target.files[0]),
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");

    axios.post("https://reqres.in/api/users", truckState);
  };

  return (
    <Form autoComplete="off" onSubmit={(e) => formSubmit(e)}>
      <Container>
        <SubDiv>
          <H1>
            FoodTruck TrackR
            <br />
            Truck Enrollment
          </H1>
        </SubDiv>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="cuisineType">Cuisine Type</Label>
        </div>
        <div className="inputDiv">
          <Input
            name="cuisineType"
            placeholder="Cuisine type"
            value={truckState.cuisineType}
            onChange={changeHandler}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="imageOfTruck">Upload Image(s) of Truck</Label>
        </div>
        <div className="inputDiv">
          <Input
            type="file"
            value={truckState.imageOfTruck}
            onChange={handleImage}
            multiple
          />
        </div>
      </Container>
      <Container>
        <H2>Menu Items</H2>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="itemDescription">Item Description</Label>
        </div>
        <div className="inputDiv">
          <textarea
            name="itemDescription"
            placeholder="Item description"
            rows="5"
            cols="35"
            value={menu.itemDescription}
            onChange={changeHandlerMenu}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="itemName">Item Name</Label>
        </div>
        <div className="inputDiv">
          <Input
            name="itemName"
            placeholder="Item Name"
            value={menu.itemName}
            onChange={changeHandlerMenu}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="itemPrice">Item Price</Label>
        </div>
        <div className="inputDiv">
          <Input
            name="itemPrice"
            placeholder="Item Price"
            value={menu.itemPrice}
            onChange={changeHandlerMenu}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="itemPhoto">Item Photo</Label>
        </div>
        <div className="inputDiv">
          <Input
            type="file"
            name="itemPhoto"
            placeholder="Item Photo"
            value={menu.itemPhoto}
            onChange={changeHandlerMenu}
            multiple
          />
        </div>
      </Container>
      <Container>
        <Button>Create new Truck</Button>
      </Container>
    </Form>
  );
}

export default TruckForm;
