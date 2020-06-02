import { axiosWithAuth } from "../utils/AxiosWithAuth";

export const FETCHING_TRUCKS = "FETCHING_TRUCKS";
export const FETCHING_TRUCKS_SUCCESS = "FETCHING_TRUCKS_SUCCESS";
export const FETCHING_TRUCKS_FAIL = "FETCHING_TRUCKS_FAIL";

export const ADDING_TRUCK = "ADDING_TRUCK";
export const ADDED = "ADDED";

export const DELETING_FAVED_TRUCK = "DELETING_FAVED_TRUCK";
export const DELETED_FAVED_TRUCK_SUCCESS = "DELETING_FAVED_TRUCK_SUCCESS";

export const DELETING_TRUCK = "DELETING_TRUCK";
export const DELETED = "DELETED";
export const ERR = "ERR";

export const FAVING_TRUCK = "FAVING_TRUCK";
export const FAV_TRUCK_SUCCESS = "FAV_TRUCK_SUCCESS";
export const FAV_TRUCK_FAIL = "FAV_TRUCK_FAIL";

export const EDITING_TRUCK = "EDITING_TRUCK";
export const EDITING_TRUCK_SUCCESS = "EDITING_TRUCK_SUCCESS";



export const getTest = (response)  => {
  const truckrequest = axiosWithAuth()
  truckrequest.get(`https://food-truck-back-end.herokuapp.com/operators/6/trucks`)
    .then(response => {console.log(response.data)})
}

export const getTrucks = (getthattruck) => {
    const truckrequest =  axiosWithAuth()
    .get('http://localhost:3333/trucks')

  return (dispatch) => {
    dispatch({
      type: FETCHING_TRUCKS,
    });
    truckrequest
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: FETCHING_TRUCKS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCHING_TRUCKS_FAIL,
          payload: error.message,
        });
        console.log(error);
      });
  };
};

export const addTruck = (truck) => {
    const request =  axiosWithAuth()
    .post(`http://localhost:3333/trucks`, truck)
    // console.log(response.header)
    return (dispatch) => {
      dispatch({
        type: ADDING_TRUCK
      })
      request.then(response => {
        // localStorage.setItem('token', (response.data.payload))
        dispatch({
          type: ADDED,
          payload: response.data
        })
        console.log(response.data)
      })
      .catch(error => {
        dispatch({
          type: ERR,
          payload: error.message
        })
      })
    }
  }

  
  export const deleteTruck = (id) => {
    axiosWithAuth()
    .delete(`http://localhost:3333/trucks/${id}`)
    return (dispatch) => {
      dispatch({
        type: DELETING_TRUCK
      })
      
      .catch((error) => {
        dispatch({
          type: ERR,
          payload: error.message,
        });
      });
  };
};

export const editTruck = (truck) => {
  const request =  axiosWithAuth()
  .put(`http://localhost:3333/trucks/${truck.id}`, truck)


  return (dispatch) => {
    dispatch({
      type: EDITING_TRUCK,
    });
    request
    .then (res => console.log(res.data))
      .then((response) => {
        dispatch({
          type: EDITING_TRUCK_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERR,
          payload: error.message,
        });
      });
  };
};
