import {axiosWithAuth} from "../utils/AxiosWithAuth";

const FETCHING_MENU_ITEMS = 'FETCHING_MENU_ITEMS'
const FETCHING_MENU_ITEMS_SUCCESS = 'FETCHING_MENU_ITEMS_SUCCESS'
const FETCHING_MENU_ITEMS_FAIL = 'FETCHING_MENU_ITEMS_FAIL'

export const getMenuItems = () => {
    const menurequest =  axiosWithAuth()
    .get('api ')

    return (dispatch) => {
        dispatch({
            type: FETCHING_MENU_ITEMS
        })
        truckrequest.then(response =>{
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