import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {connect} from 'react-redux';
import * as TruckActions from '../actions/TruckActions';
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
import {H1, H2, Form, Container, SubDiv, Button, Input, Label} from './Styles.js'
// import addTruck, { ADDED, DELETED } from '../actions/TruckActions';




function AddTruck(props) {
  const history = useHistory()
  // const id = useParams()
  const params = useParams()
  const id = useParams()

  // const [truckState, setTruckState] = useState({
  //   cuisineType: "",
  //   customerRating: [],
  //   customerRatingAvg: [],
  //   imageOfTruck: [],
  //   menu: [
  //     {
  //       itemName: "",
  //       itemDescription: "",
  //       itemPhoto: [],
  //       itemPrice: "",
  //       customerRating: [],
  //       customerRatingAvg: [],
  //     },
  //   ],
  // });
  const [truckState, setTruckState] = useState({
    customer_rating: '',
    cuisine_type: "",
    name: '',
    // operator_id:``
    // image: '',
    // menu: [
    //   {
    //     itemName: "",
    //     itemDescription: "",
    //     itemPhoto: [],
    //     itemPrice: "",
    //     customerRating: [],
    //     customerRatingAvg: [],
    //   },
    // ],
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
  // console.log(truckState.menu);

  // ADDTRUCK

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

const addTruck = (truck) => {
  axiosWithAuth()
  .post(`http://localhost:3333/trucks`, truck)
  .then(res => {console.log (res.data)})
}
  const handleSubmit = (e) => {
    e.preventDefault()
    addTruck(truckState)
  }


  return (

    <Form autoComplete="off" onSubmit={handleSubmit}>
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
          <Label htmlFor="name">Name</Label>
        </div>
        <div className="inputDiv">
          <Input
          type='text'
            name="name"
            placeholder="Name"
            value={truckState.name}
            onChange={changeHandler}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="cuisine_type">Cuisine Type</Label>
        </div>
        <div className="inputDiv">
          <Input
          type='text'
            name="cuisine_type"
            placeholder="Cuisine type"
            value={truckState.cuisine_type}
            onChange={changeHandler}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="customer_rating">Customer Rating</Label>
        </div>
        <div className="inputDiv">
          <Input
            type='text'
            name="customer_rating"
            placeholder="avg Customer Rating"
            value={truckState.customer_rating}
            onChange={changeHandler}
          />
          {/* <button onClick={TruckActions.getTest}>test</button> */}
        </div>
      </Container>
      {/* <Container>
        <div className="labelDiv">
          <Label htmlFor="image">Upload Image(s) of Truck</Label>
        </div>
        <div className="inputDiv">
          <Input
            name="image"
            type="file"
            value={truckState.image}
            onChange={handleImage}
            multiple
          />
        </div>
      </Container> */}
      {/* <Container>
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
      </Container> */}
      {/* <Container>
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
      </Container> */}
      {/* <Container>
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
      </Container> */}
      {/* <Container>
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
      </Container> */}
      <Container>
        <Button>Create new Truck</Button>
      </Container>
    </Form>
  );
}
// const mapStateToProps = (state) => {
//   return {
//       truck: state.truck

//   }
// }

export default connect(
  state => state,
  TruckActions
)(AddTruck);
