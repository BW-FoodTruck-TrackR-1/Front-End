
import {axiosWithAuth} from "../utils/AxiosWithAuth";

export const FETCHING_TRUCKS = 'FETCHING_TRUCKS'
export const FETCHING_TRUCKS_SUCCESS = 'FETCHING_TRUCKS_SUCCESS'
export const FETCHING_TRUCKS_FAIL = 'FETCHING_TRUCKS_FAIL'

export const ADDING_TRUCK = 'ADDING_TRUCK'
export const ADDED = 'ADDDED'

export const DELETING_TRUCK = 'DELETING_TRUCK'
export const DELETED = 'DELETED'
export const ERR = 'ERR'

export const FAVING_TRUCK = 'FAVING_TRUCK'
export const FAV_TRUCK_SUCCESS = 'FAV_TRUCK_SUCCESS'
export const FAV_TRUCK_FAIL ='FAV_TRUCK_FAIL'

export const DELETING_FAVED_TRUCK = 'DELETING_FAVED_TRUCK'
export const DELETED_FAVED_TRUCK_SUCCESS = 'DELETING_FAVED_TRUCK_SUCCESS'


export const getTrucks = () => {
    const truckrequest =  axiosWithAuth()
    .get('api ')

    return (dispatch) => {
        dispatch({
            type: FETCHING_TRUCKS
        })
        truckrequest.then(response =>{
            dispatch({
                type: FETCHING_TRUCKS_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: FETCHING_TRUCKS_FAIL,
                payload: error.message,
              
            })
            console.log(error)
        })
    }
}


export const addTruck = (truck) => {
    const request =  axiosWithAuth()
    .post('api', truck)
  
    return (dispatch) => {
      dispatch({
        type: ADDING_TRUCK
      })
      request.then(response => {
        dispatch({
          type: ADDED,
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: ERR,
          payload: error.message
        })
      })
    }
  }
  
  export const deleteTruck = (id) => {
    const request =  axiosWithAuth()
    .delete(`api/${id}`)
  
    return (dispatch) => {
      dispatch({
        type: DELETING_TRUCK
      })
      request.then(response => {
        dispatch({
          type: DELETED,
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: ERR,
          payload: error.message
        })
      })
    }
  }
  


export const favTruck = (truck) => {
  const request =  axiosWithAuth()
  .post('api', truck)

  return (dispatch) => {
    dispatch({
      type: FAVING_TRUCK
    })
    request.then(response => {
      dispatch({
        type: FAV_TRUCK_SUCCESS,
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: FAV_TRUCK_FAIL,
        payload: error.message
      })
    })
  }
}

export const deleteFavedTruck = (id) => {
  const request =  axiosWithAuth()
  .delete(`api/${id}`)

  return (dispatch) => {
    dispatch({
      type: DELETING_FAVED_TRUCK
    })
    request.then(response => {
      dispatch({
        type: DELETED_FAVED_TRUCK_SUCCESS,
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: ERR,
        payload: error.message
      })
    })
  }
}