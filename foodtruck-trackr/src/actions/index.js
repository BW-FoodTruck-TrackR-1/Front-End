import axios from 'axios'

const FETCHING_TRUCKS = 'FETCHING_TRUCKS'
const FETCHING_TRUCKS_SUCCESS = 'FETCHING_TRUCKS_SUCCESS'
const FETCHING_TRUCKS_FAIL = 'FETCHING_TRUCKS_FAIL'

export const getTrucks = () => {
    const truckrequest = axios.get('api ')

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
    const request = axios.post('api', truck)
  
    return (dispatch) => {
      dispatch({
        type: 'ADDING_TRUCK'
      })
      request.then(response => {
        dispatch({
          type: 'ADDED',
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: 'ERR',
          payload: error.message
        })
      })
    }
  }
  
  export const deleteTruck = (id) => {
    const request = axios.delete(`api/${id}`)
  
    return (dispatch) => {
      dispatch({
        type: 'DELETING_TRUCK'
      })
      request.then(response => {
        dispatch({
          type: 'DELETED',
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: 'ERR',
          payload: error.message
        })
      })
    }
  }
  