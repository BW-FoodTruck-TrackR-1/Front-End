import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {connect} from 'react-redux';
import * as TruckActions from '../actions/TruckActions';
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
import {H1, H2, Form, Container, SubDiv, Button, Input, Label} from './Styles.js'
// import addTruck, { ADDED, DELETED } from '../actions/TruckActions';




function TruckForm() {
  const history = useHistory()
  const {id} = useParams()
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
    name: '',
    cuisine_type: "",
    customer_rating: '',
    image: '',
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
  console.log(truckState.menu);

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

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted!");

  //   axios.post("https://reqres.in/api/users", truckState);
  // };

  const handleSubmit = (e) => {
     e.preventDefault()
    //axiosWithAuth call
    axiosWithAuth()
    //posting our  data to the  api
      .post(`https://food-truck-back-end.herokuapp.com/operators/${id}/trucks`, truckState)
      .then((res) => {

        setTruckState({
          name: '',
          cuisine_type: "",
          customer_rating: '',
          image: '',
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
            name="name"
            placeholder="Name"
            value={truckState.name}
            onChange={changeHandler}
          />
        </div>
      </Container>
      <Container>
        <div className="labelDiv">
          <Label htmlFor="cuisineType">Cuisine Type</Label>
        </div>
        <div className="inputDiv">
          <Input
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
            name="customer_rating"
            placeholder="avg Customer Rating"
            value={truckState.customer_rating}
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
            name="image"
            type="file"
            value={truckState.image}
            onChange={handleImage}
            multiple
          />
        </div>
      </Container>
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
const mapStateToProps = (state) => {
  return {
      truck: state.truck

  }
}

export default connect(
  state => state,
  TruckActions
)(TruckForm);



// smurf 

// import React, { useState, Component } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { Route, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import {
//   getTrucks,
//   addTruck,
//   deleteTruck,
//   favTruck,
//   deleteFavedTruck,
// } from "../actions/TruckActions";
// import {
//   getMenuItems,
//   addMenuItem,
//   deletMenuItem,
// } from "../actions/MenukActions";

// class OperatorForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       cuisineType: "",
//       customerRating: [],
//       customerRatingAvg: [],
//       imageOfTruck: [],
//       menu: [
//         {
//           itemName: "",
//           itemDescription: "",
//           itemPhoto: [],
//           itemPrice: "",
//           customerRating: [],
//           customerRatingAvg: [],
//         },
//       ],
//     };
//   }

//   // may not  need

//   // constructor(){
//   //   super();
//   //   this.state = [
//   //     {
//   //       itemName: "",
//   //       itemDescription: "",
//   //       itemPhotos: [],
//   //       itemPrice: "",
//   //       customerRating: [],
//   //       customerRatingAvg: [],
//   //     },
//   //   ];
//   // }

//   addTruck = (e) => {
//     const truck = {
//       cuisineType: this.state.cuisineType,
//       customerRating: this.state.customerRating,
//       customerRatingAvg: this.state.customerRatingAvg,
//       imageOfTruck: this.state.imageOfTruck,
//       // menu
//       itemName: this.state.menu.itemName,
//       itemDescription: this.state.menu.itemDescription,
//       itemPhoto: this.state.menu.itemPhoto,
//       customerRating: this.state.menu.customerRating,
//       customerRatingAvg: this.state.menu.customerRatingAvg,
//     };
//     this.props.addTruck(truck);
//   };

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   delete = (e) => {
//     this.setState({ id: e.target.value });
//     this.props.deleteTruck(this.state.id);
//     this.setState({ id: "" });
//   };

//   idSet = (e) => {
//     this.setState({ id: e.target.value });
//   };

//   componentDidMount() {
//     this.props.getTrucks();
//   }

//   render() {
//     return (
//       <div className="getalltrucks">
//         <h1>TRUCKNS</h1>
//         {this.props.isfetchingOperator ? (
//           <h3>loading...</h3>
//         ) : (
//           <ul>
//             {/* trucks may be from api */}
//             {this.props.trucks.map((truck) => {
//               return (
//                 <div key={truck.name}>
//                   <div>cuisineType: {truck.cuisineType}</div>
//                   <div>customerRating: {truck.customerRating}</div>
//                   <div>customerRatingAvg: {truck.customerRatingAvg}</div>
//                   <div>imageOfTruck: {truck.imageOfTruck}</div>
//                   {/* menu */}
//                   <div>itemName: {truck.menu.itemName}</div>
//                   <div>itemName: {truck.menu.itemDescription}</div>
//                   <div>itemName: {truck.menu.itemPhoto}</div>
//                   <div>itemName: {truck.menu.itemPrice}</div>
//                   <div>itemName: {truck.menu.customerRating}</div>
//                   <div>itemName: {truck.menu.customerRatingAvg}</div>

//                   {this.state.id === "" ? (
//                     <button value={truck.id} onClick={this.idSet}>
//                       delete
//                     </button>
//                   ) : (
//                     <button onClick={this.delete}>confirm delete?</button>
//                   )}
//                 </div>
//               );
//             })}
//           </ul>
//         )}
//         <div className="add-truck">
//           <form className="fields" onSubmit={this.addTruck}>
//             <input
//               onChange={this.handleInputChange}
//               placeholder="cuisineType"
//               value={this.state.cuisineType}
//               name="cuisineType"
//             />
//             <input
//               onChange={this.handleInputChange}
//               placeholder="customerRating"
//               value={this.state.customerRating}
//               name="customerRating"
//             />
//             <input
//               onChange={this.handleInputChange}
//               placeholder="customerRatingAvg"
//               value={this.state.customerRatingAvg}
//               name="customerRatingAvg"
//             />
//             <input
//               onChange={this.handleInputChange}
//               placeholder="customerRatingAvg"
//               value={this.state.customerRatingAvg}
//               name="customerRatingAvg"
//             />

//             <input
//               onChange={this.handleInputChange}
//               placeholder="customerRatingAvg"
//               value={this.state.customerRatingAvg}
//               name="customerRatingAvg"
//             />

//             <input
//               onChange={this.handleInputChange}
//               placeholder="imageOfTruck"
//               value={this.state.customerRatingAvg}
//               name="customerRatingAvg"
//             />

//             <button type="submit">Add to village!</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     fetchingSmurfs: state.fetchingSmurfs,
//   };
// };

// export default connect(mapStateToProps, {
//   getSmurfs,
//   addTruck,
//   deleteTruck,
// })(OperatorForm);



