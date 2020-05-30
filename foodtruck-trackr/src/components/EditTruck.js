// // import React, { useState } from "react";
// // import axios from "axios";
// // import styled from "styled-components";
// // import { Route, Link } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import {connect} from 'react-redux';
// // import Truck from './Truck'
// // import TruckCard from './TruckCard'
// // // import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
// // import * as TruckActions from '../actions/TruckActions'
// // const H1 = styled.h1`
// //   font-size: 2rem;
// //   color: #ffc23b;
// //   text-align: center;
// // `;
// // const H2 = styled.h2`
// //   font-size: 1.4rem;
// //   color: #ffc23b;
// //   text-align: center;
// // `;
// // const Form = styled.form`
// //   margin: auto;
// //   margin-top: 50px;
// //   padding: 50px;
// //   width: 500px;
// //   height: auto;
// //   background-color: #c23b21;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   position: relative;
// //   top: 50;
// //   left: 50;
// // `;
// // const Container = styled.div`
// //   height: 100px;
// //   width: 350px;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// // `;
// // const SubDiv = styled.div`
// //   width: 100%;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// // `;
// // const Button = styled.button`
// //   height: 60px;
// //   width: 150px;
// //   background-color: #fecb00;
// //   border-radius: 5px;
// //   margin-top: auto;
// // `;
// // const Input = styled.input`
// //   height: 20px;
// //   width: 200px;
// // `;
// // const Label = styled.label`
// //   width: 100%;
// //   font-size: 1.2rem;
// //   color: #f7e976;
// //   padding: 50px;
// // `;
// // const StyledLink = styled(Link)`
// //   text-decoration: none;
// //   font-size: 1.4rem;
// //   color: #c4c4c4;
// //   margin: 10px;
// // `;

// // // const initialState = 
// // // {
// // //     cuisineType: "",
// // //     customerRating: [],
// // //     customerRatingAvg: [],
// // //     imageOfTruck: [],
// // //     menu: [
// // //       {
// // //         itemName: "",
// // //         itemDescription: "",
// // //         itemPhoto: [],
// // //         itemPrice: "",
// // //         customerRating: [],
// // //         customerRatingAvg: [],
// // //       },
// // //     ],
// // //   }

// // function EditTruckForm(props) {
// //   const { editTruck } = props
// //   const [truckState, setTruckState] = useState({
// //     cuisineType: "",
// //     customerRating: [],
// //     customerRatingAvg: [],
// //     imageOfTruck: [],
// //     menu: [
// //       {
// //         itemName: "",
// //         itemDescription: "",
// //         itemPhoto: [],
// //         itemPrice: "",
// //         customerRating: [],
// //         customerRatingAvg: [],
// //       },
// //     ],
// //   });
// //   const [menu, setMenu] = useState([
// //     {
// //       itemName: "",
// //       itemDescription: "",
// //       itemPhotos: [],
// //       itemPrice: "",
// //       customerRating: [],
// //       customerRatingAvg: [],
// //     },
// //   ]);

// //   // edit area
// //   const [edit,setEdit ]  = useState(false)
// //   const [cuisineTypeToEdit,setcuisineTypeToEdit]=useState(cuisineType);
// //   const [customerRatingToEdit,setcustomerRatingToEdit]=useState(customerRating);
// //   const [customerRatingAvgToEdit,setcustomerRatingAvgToEdit]=useState(customerRatingAvg);
// //   const [itemNameToEdit,setitemNameToEdit]=useState(itemName);


// //   const [imageOfTruckToEdit,setimageOfTruckToEdit]=useState(imageOfTruck);



  
// //   const editcuisineType = (cuisineType) => {
// //     setEdit(true);
// //     setcuisineTypeToEdit(cuisineType);
// //   };


  
// //   const editimageOfTruck = (imageOfTruck) => {
// //     setEdit(true);
// //     setimageOfTruckToEdit(imageOfTruck);
// //   };
  
// //   const edititemName = (itemName) => {
// //     setEdit(true);
// //     setitemNameToEdit(itemName);
// //   };

// //   const { editTruck } = props
  
// //   // onChange={(e) =>
// //   //   setColorToEdit({ ...colorToEdit, color: e.target.value })
// //   // }
// //   // value={colorToEdit.color}

  
// //   const changeHandler = (e) => {
// //     e.persist();
// //     e.preventDefault();
// //     setTruckState({
// //       ...truckState,
// //       [e.target.name]: e.target.value,
// //     });
// //   };
// //   const changeHandlerMenu = (e) => {
// //     e.persist();
// //     e.preventDefault();
// //     setMenu({
// //       ...menu,
// //       [e.target.name]: e.target.value,
// //     });
// //     setTruckState({
// //       ...menu,
// //       [e.target.name]: e.target.value,
// //     });
// //   };
// //   const handleImage = (e) => {
// //     e.persist();
// //     setTruckState({
// //       file: URL.createObjectURL(e.target.files[0]),
// //     });
// //   };
// //   const formSubmit = (e) => {
// //     e.preventDefault();
// //     editTruck(id, truckState)
// //   };
// //   return (
// //     <Form autoComplete="off" onSubmit={formSubmit}>
// //       <Container>
// //         <SubDiv>
// //           <H1>
// //             FoodTruck TrackR
// //             <br />
// //             Truck Enrollment
// //           </H1>
// //         </SubDiv>
// //       </Container>
// //       <Container>
// //         <div className="labelDiv">
// //           <Label htmlFor="cuisineType">Cuisine Type</Label>
// //         </div>
// //         <div className="inputDiv">
// //           <Input
// //             name="cuisineType"
// //             placeholder="Cuisine type"
// //             value={truckState.cuisineType}
// //             onChange={changeHandler}

// //   ///////////
// //   onChange={(e) =>
// //     setcuisineTypeToEdit({ ...cuisineTypeToEdit, cuisineType: e.target.value })
// //   }
// //   value={cuisineTypeToEdit.cuisineType}

// //           />
// //         </div>
// //       </Container>
// //       <Container>
// //         <div className="labelDiv">
// //           <Label htmlFor="imageOfTruck">Upload Image(s) of Truck</Label>
// //         </div>
// //         <div className="inputDiv">
// //           <Input
// //             type="file"
// //             value={truckState.imageOfTruck}
// //             onChange={handleImage}
// //             multiple

// //   ///////////
// //   onChange={(e) =>
// //     setimageOfTruckToEdit({ ...imageOfTruckToEdit, imageOfTruck: e.target.value })
// //   }
// //   value={imageOfTruckToEdit.imageOfTruck}


// //           />
// //         </div>
// //       </Container>
// //       <Container>
// //         <H2>Menu Items</H2>
// //       </Container>
// //       <Container>
// //         <div className="labelDiv">
// //           <Label htmlFor="itemDescription">Item Description</Label>
// //         </div>
// //         <div className="inputDiv">
// //           <textarea
// //             name="itemDescription"
// //             placeholder="Item description"
// //             rows="5"
// //             cols="35"
// //             value={menu.itemDescription}
// //             onChange={changeHandlerMenu}
// //           />
// //         </div>
// //       </Container>
// //       <Container>
// //         <div className="labelDiv">
// //           <Label htmlFor="itemName">Item Name</Label>
// //         </div>
// //         <div className="inputDiv">
// //           <Input
// //             name="itemName"
// //             placeholder="Item Name"
// //             value={menu.itemName}
// //             onChange={changeHandlerMenu}

// //               ///////////
// //   onChange={(e) =>
// //     setitemNameToEdit({ ...itemNameToEdit, itemName: e.target.value })
// //   }
// //   value={itemNameToEdit.itemName}
           
          
          
// //           />
// //         </div>
// //       </Container>
// //       <Container>
// //         <div className="labelDiv">
// //           <Label htmlFor="itemPrice">Item Price</Label>
// //         </div>
// //         <div className="inputDiv">
// //           <Input
// //             name="itemPrice"
// //             placeholder="Item Price"
// //             value={menu.itemPrice}
// //             onChange={changeHandlerMenu}
// //           />
// //         </div>
// //       </Container>
// //       <Container>
// //         <div className="labelDiv">
// //           <Label htmlFor="itemPhoto">Item Photo</Label>
// //         </div>
// //         <div className="inputDiv">
// //           <Input
// //             type="file"
// //             name="itemPhoto"
// //             placeholder="Item Photo"
// //             value={menu.itemPhoto}
// //             onChange={changeHandlerMenu}
// //             multiple
// //           />
// //         </div>
// //       </Container>
// //       <Container>

      

// // {Truck.map((cuisineType)=>(
// //   <button key={cuisineType.cuisineType} onClick={()=> editcuisineType(cuisineType)}   ></button>

// // ))}
// // {Truck.map((imageOfTruck)=>(
// //   <button key={imageOfTruck.imageOfTruck} onClick={()=> editimageOfTruck(imageOfTruck)}   ></button>

// // ))}
// // {Truck.map((itemName)=>(
// //   <button key={itemName.itemName} onClick={()=> edititemName(itemName)}   ></button>

// // ))}


// //         {/* <Button> EDIT TRUCK</Button> */}
// //       </Container>
// //     </Form>
// //   );
// // }
// // export default connect(
// //   state => state,
// //   TruckActions
// // )(EditTruckForm);

// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
// ///////////////////////nextpart///////////////////////////////////
// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import {connect} from 'react-redux';
// import * as TruckActions from '../actions/TruckActions';
// import {axiosWithAuth} from '../utils/AxiosWithAuth'
// import { useHistory, useParams } from 'react-router-dom'
// import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
// import {H1, H2, Form, Container, SubDiv, Button, Input, Label} from './Styles.js'
// // import addTruck, { ADDED, DELETED } from '../actions/TruckActions';




// function EditTruckForm() {
//   const history = useHistory()
//   const {id} = useParams()
//   const { editTruck } = props

//   // const [truckState, setTruckState] = useState({
//   //   cuisineType: "",
//   //   customerRating: [],
//   //   customerRatingAvg: [],
//   //   imageOfTruck: [],
//   //   menu: [
//   //     {
//   //       itemName: "",
//   //       itemDescription: "",
//   //       itemPhoto: [],
//   //       itemPrice: "",
//   //       customerRating: [],
//   //       customerRatingAvg: [],
//   //     },
//   //   ],
//   // });
//   const [truckState, setTruckState] = useState({
//     name: '',
//     cuisine_type: "",
//     customer_rating: '',
//     image: '',

//   });

//   // const [menu, setMenu] = useState([
//   //   {
//   //     itemName: "",
//   //     itemDescription: "",
//   //     itemPhotos: [],
//   //     itemPrice: "",
//   //     customerRating: [],
//   //     customerRatingAvg: [],
//   //   },
//   // ]);
//   console.log(truckState.menu);

//   // EDITTRUCK

//   const [edit,setEdit ]  = useState(false)
//   const [nameToEdit,setnameToEdit]=useState(name);
//   const [cuisine_typeToEdit,setcuisine_typeToEdit]=useState(cuisine_type);
//   const [customer_ratingToEdit,setcustomer_ratingToEdit]=useState(customer_rating);
//   const [imageToEdit,setimageToEdit]=useState(image);





  
//   const editname = (name) => {
//     setEdit(true);
//     setnameToEdit(name);
//   };


  
//   const editcuisine_type = (cuisine_type) => {
//     setEdit(true);
//     setcuisine_typeToEdit(cuisine_type);
//   };
  
//   const editcustomer_rating = (customer_rating) => {
//     setEdit(true);
//     setcustomer_ratingToEdit(customer_rating);
//   };

//   const editimage = (image) => {
//     setEdit(true);
//     setimageToEdit(image);
//   };



//   const changeHandler = (e) => {
//     e.persist();
//     e.preventDefault();
//     setTruckState({
//       ...truckState,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const changeHandlerMenu = (e) => {
//     e.persist();
//     e.preventDefault();
//     setMenu({
//       ...menu,
//       [e.target.name]: e.target.value,
//     });
//     setTruckState({
//       ...menu,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImage = (e) => {
//     e.persist();
//     setTruckState({
//       file: URL.createObjectURL(e.target.files[0]),
//     });
//   };


//   const handleSubmit = (e) => {
//      e.preventDefault()
//     // const truckID = id.id
//     TruckActions.addTruck(id, truckState)
//   }

//   return (
//     <Form autoComplete="off" onSubmit={handleSubmit}>
//       <Container>
//         <SubDiv>
//           <H1>
//             FoodTruck TrackR
//             <br />
//             Truck Enrollment
//           </H1>
//         </SubDiv>
//       </Container>
//       <Container>
//         <div className="labelDiv">
//           <Label htmlFor="name">Name</Label>
//         </div>
//         <div className="inputDiv">
//           <Input
//             name="name"
//             placeholder="Name"
//             value={truckState.name}
//             onChange={changeHandler}

// ///////////
// onChange={(e) =>
//   setnameToEdit({ ...nameToEdit, name: e.target.value })
// }
// value={nameToEdit.name}

//           />
//         </div>
//       </Container>
//       <Container>
//         <div className="labelDiv">
//           <Label htmlFor="cuisineType">Cuisine Type</Label>
//         </div>
//         <div className="inputDiv">
//           <Input
//             name="cuisine_type"
//             placeholder="Cuisine type"
//             value={truckState.cuisine_type}
//             onChange={changeHandler}

//   ///////////
//   onChange={(e) =>
//     setcuisine_typeToEdit({ ...cuisine_typeToEdit, cuisine_type: e.target.value })
//   }
//   value={cuisine_typeToEdit.cuisine_type}

//           />
//         </div>
//       </Container>
//       <Container>
//         <div className="labelDiv">
//           <Label htmlFor="customer_rating">Customer Rating</Label>
//         </div>
//         <div className="inputDiv">
//           <Input
//             name="customer_rating"
//             placeholder="avg Customer Rating"
//             value={truckState.customer_rating}
//             onChange={changeHandler}
//           />
//         </div>
//       </Container>
      
//       <Container>
//         <Button>Create new Truck</Button>
//       </Container>
//     </Form>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//       truck: state.truck

//   }
// }

// export default connect(
//   state => state,
//   TruckActions
// )(EditTruckForm);
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {connect} from 'react-redux';
import Truck from './Truck'
import TruckCard from './TruckCard'
// import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
import * as TruckActions from '../actions/TruckActions'
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

// const initialState = 
// {
//     cuisineType: "",
//     customerRating: [],
//     customerRatingAvg: [],
//     imageOfTruck: [],
//     menu: [
//       {
//         itemName: "",
//         itemDescription: "",
//         itemPhoto: [],
//         itemPrice: "",
//         customerRating: [],
//         customerRatingAvg: [],
//       },
//     ],
//   }

function EditTruckForm(props) {
  const { editTruck } = props
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

  // edit area
  const [edit,setEdit ]  = useState(false)
  const [cuisineTypeToEdit,setcuisineTypeToEdit]=useState(cuisineType);
  const [customerRatingToEdit,setcustomerRatingToEdit]=useState(customerRating);
  const [customerRatingAvgToEdit,setcustomerRatingAvgToEdit]=useState(customerRatingAvg);
  const [itemNameToEdit,setitemNameToEdit]=useState(itemName);


  const [imageOfTruckToEdit,setimageOfTruckToEdit]=useState(imageOfTruck);



  
  const editcuisineType = (cuisineType) => {
    setEdit(true);
    setcuisineTypeToEdit(cuisineType);
  };


  
  const editimageOfTruck = (imageOfTruck) => {
    setEdit(true);
    setimageOfTruckToEdit(imageOfTruck);
  };
  
  const edititemName = (itemName) => {
    setEdit(true);
    setitemNameToEdit(itemName);
  };

  const { editTruck } = props
  
  // onChange={(e) =>
  //   setColorToEdit({ ...colorToEdit, color: e.target.value })
  // }
  // value={colorToEdit.color}

  
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
    editTruck(id, truckState)
  };
  return (
    <Form autoComplete="off" onSubmit={formSubmit}>
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

  ///////////
  onChange={(e) =>
    setcuisineTypeToEdit({ ...cuisineTypeToEdit, cuisineType: e.target.value })
  }
  value={cuisineTypeToEdit.cuisineType}

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

  ///////////
  onChange={(e) =>
    setimageOfTruckToEdit({ ...imageOfTruckToEdit, imageOfTruck: e.target.value })
  }
  value={imageOfTruckToEdit.imageOfTruck}


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

              ///////////
  onChange={(e) =>
    setitemNameToEdit({ ...itemNameToEdit, itemName: e.target.value })
  }
  value={itemNameToEdit.itemName}
           
          
          
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

      

{Truck.map((cuisineType)=>(
  <button key={cuisineType.cuisineType} onClick={()=> editcuisineType(cuisineType)}   ></button>

))}
{Truck.map((imageOfTruck)=>(
  <button key={imageOfTruck.imageOfTruck} onClick={()=> editimageOfTruck(imageOfTruck)}   ></button>

))}
{Truck.map((itemName)=>(
  <button key={itemName.itemName} onClick={()=> edititemName(itemName)}   ></button>

))}


        {/* <Button> EDIT TRUCK</Button> */}
      </Container>
    </Form>
  );
}
export default connect(
  state => state,
  TruckActions
)(EditTruckForm);



