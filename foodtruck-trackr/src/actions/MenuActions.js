import {axiosWithAuth} from "../utils/AxiosWithAuth";

const FETCHING_MENU_ITEMS = 'FETCHING_MENU_ITEMS'
const FETCHING_MENU_ITEMS_SUCCESS = 'FETCHING_MENU_ITEMS_SUCCESS'
const FETCHING_MENU_ITEMS_FAIL = 'FETCHING_MENU_ITEMS_FAIL'
const ADD_MENU_ITEM ='ADD_MENU_ITEM'
const ADD_MENU_ITEM_SUCCESS = 'ADD_MENU_ITEM_SUCCESS'
const ADD_MENU_ITEM_FAIL = 'ADD_MENU_ITEM_FAIL'
const DELETE_MENU_ITEM ='ADD_MENU_ITEM'
const DELETE_MENU_ITEM_SUCCESS = 'ADD_MENU_ITEM_SUCCESS'
const DELETE_MENU_ITEM_FAIL = 'ADD_MENU_ITEM_FAIL'


export const getMenuItems = () => {
    const menurequest =  axiosWithAuth()
    .get('api ')

    return (dispatch) => {
        dispatch({
            type: FETCHING_MENU_ITEMS
        })
        menurequest.then(response =>{
            dispatch({
                type: FETCHING_MENU_ITEMS_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: FETCHING_MENU_ITEMS_FAIL,
                payload: error.message,
              
            })
            console.log(error)
        })
    }
}


export const addMenuItem = (truck) => {
    const request =  axiosWithAuth()
    .post('api', truck)
  
    return (dispatch) => {
      dispatch({
        type: 'ADD_MENU_ITEM'
      })
      request.then(response => {
        dispatch({
          type: 'ADD_MENU_ITEM_SUCCESS',
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: 'ADD_MENU_ITEM_FAIL',
          payload: error.message
        })
      })
    }
  }
  
  export const deletMenuItem = (id) => {
    const request =  axiosWithAuth()
    .delete(`api/${id}`)
  
    return (dispatch) => {
      dispatch({
        type: 'DELETE_MENU_ITEM'
      })
      request.then(response => {
        dispatch({
          type: 'DELETE_MENU_ITEM_SUCCESS',
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: 'DELETE_MENU_ITEM_FAIL',
          payload: error.message
        })
      })
    }
  }