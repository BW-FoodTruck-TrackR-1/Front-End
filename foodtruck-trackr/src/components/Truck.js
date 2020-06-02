import axios from 'axios'
import React, { useState, useEffect } from "react";
import {editTruck, deleteTruck, getTrucks}  from '../actions/TruckActions'
import { connect } from 'react-redux'

const initialState = [{}]


const Truck = (props) => {
  const [editing, setEditing] = useState(false)
  const [truckToEdit, setTruckToEdit] = useState(initialState)

  useEffect(() => {
    getTrucks()
  },[truckToEdit])


  // const testEditTruck = (truck) => {
  //   axios
  //   .put(`http://localhost:3333/trucks/${truck.id}`, truck)
  //       .then((response) => {
  //        console.log(response.data)
  //       })
  //       .catch((error) => {console.log(error)});
  //   };
  

  // useEffect(() => {
  //   setTruckToEdit(props.truck)
  // })

  const edit = (e) => {
    setEditing(true)
    setTruckToEdit(props.truck)
  }

  const saveEdit = (e) => {
    e.preventDefault()
    console.log(truckToEdit)
    editTruck(truckToEdit)
    setEditing(false)
    window.location.reload()

  }
  const onNameChange = (e) => {
    e.preventDefault()
    setTruckToEdit({ ...truckToEdit, name: e.target.value })
  }

  const onCuisineChange = (e) => {
    e.preventDefault()
    setTruckToEdit({...truckToEdit, cuisine_type: e.target.value})
  }

  const onRatingChange = (e) => {
    e.preventDefault()
    setTruckToEdit({...truckToEdit, customer_rating: e.target.value})
  }

  return (
      <div>
        {editing && (<form onSubmit={saveEdit}>
          <legend>edit truck</legend>
          <label>
            Truck Name:
            <input
              onChange={onNameChange}
              value={truckToEdit.name}
            />
          </label>
          <label>
            Type of Cuisine:
            <input
              onChange={onCuisineChange}
              value={truckToEdit.cuisine_type}
            />
          </label>
          <label>
            Customer Avg Rating:
            <input
              onChange={onRatingChange}
              value={truckToEdit.customer_rating}
            />
          </label>
          <div className="button-row">
            <button type="submit">Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>)}


<div className='trucks'>
              <h2>Truck Name: {props.truck.name}</h2>
              <p>Cuisine Type: {props.truck.cuisine_type}</p>
              <p>Customer Rating: {props.truck.customer_rating}</p>
              <button onClick={() => {
                deleteTruck(props.truck.id)
                window.location.reload()}}>Delete Truck</button>
                <button onClick={() => edit(truckToEdit.id)}>edit truck</button>
            </div> 
    <div>
        {/* <button onClick={() => favTruck(props.truck)}>Add To Favorites</button> */}
    </div>
    </div>
  );
};


export default Truck