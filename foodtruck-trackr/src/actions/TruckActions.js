
import {axiosWithAuth} from "../utils/AxiosWithAuth";

const FETCHING_TRUCKS = 'FETCHING_TRUCKS'
const FETCHING_TRUCKS_SUCCESS = 'FETCHING_TRUCKS_SUCCESS'
const FETCHING_TRUCKS_FAIL = 'FETCHING_TRUCKS_FAIL'

const ADDING_TRUCK = 'ADDING_TRUCK'
const ADDED = 'ADDDED'

const DELETING_TRUCK = 'DELETING_TRUCK'
const DELETED = 'DELETED'
const ERR = 'ERR'

const FAVING_TRUCK = 'FAVING_TRUCK'
const FAV_TRUCK_SUCCESS = 'FAV_TRUCK_SUCCESS'
const FAV_TRUCK_FAIL ='FAV_TRUCK_FAIL'

const DELETING_FAVED_TRUCK = 'DELETING_FAVED_TRUCK'
const DELETING_FAVED_TRUCK_SUCCESS = 'DELETING_FAVED_TRUCK_SUCCESS'


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
        type: DELETING_FAVED_TRUCK_SUCCESS,
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