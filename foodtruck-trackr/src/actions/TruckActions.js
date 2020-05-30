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

export const getTrucks = (getthattruck) => {
  const truckrequest = axiosWithAuth().get(
    "https://food-truck-back-end.herokuapp.com/operators/1/trucks",
    getthattruck
  );

  return (dispatch) => {
    dispatch({
      type: FETCHING_TRUCKS,
    });
    truckrequest
      .then((response) => {
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

export const addTruck = (id, truck) => {
  const request = axiosWithAuth().post(
    `https://food-truck-back-end.herokuapp.com/operators/${id}/trucks`,
    truck
  );

  return (dispatch) => {
    dispatch({
      type: ADDING_TRUCK,
    });
    request
      .then((response) => {
        dispatch({
          type: ADDED,
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

export const deleteTruck = (id) => {
  const request = axiosWithAuth().delete(
    `https://food-truck-back-end.herokuapp.com/operators/${id}`
  );

  return (dispatch) => {
    dispatch({
      type: DELETING_TRUCK,
    });
    request
      .then((response) => {
        dispatch({
          type: DELETED,
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

export const favTruck = (truck) => {
  const request = axiosWithAuth()
    //this route doesnt exist yet but somethinbg like this?
    .post(`https://food-truck-back-end.herokuapp.com/diners/favtrucks/`, truck);

  return (dispatch) => {
    dispatch({
      type: FAVING_TRUCK,
    });
    request
      .then((response) => {
        dispatch({
          type: FAV_TRUCK_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FAV_TRUCK_FAIL,
          payload: error.message,
        });
      });
  };
};

// export const deleteFavedTruck = (id) => {
//   const request = axiosWithAuth()
//     //route doesnt exist yet
//     .delete(`https://food-truck-back-end.herokuapp.com/diners/favtrucks/${id}`);

//   return (dispatch) => {
//     dispatch({
//       type: DELETING_FAVED_TRUCK,
//     });
//     request
//       .then((response) => {
//         dispatch({
//           type: DELETED_FAVED_TRUCK_SUCCESS,
//           payload: response.data,
//         });
//       })
//     })
//   }
// }

export const editTruck = (id, truck) => {
  const request = axiosWithAuth().put(
    `https://food-truck-back-end.herokuapp.com/operators/${id}/trucks`,
    truck
  );

  return (dispatch) => {
    dispatch({
      type: EDITING_TRUCK,
    });
    request
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
