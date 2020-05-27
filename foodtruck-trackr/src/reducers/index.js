/*import {
  FETCHING_TRUCKS,
  FETCHING_TRUCKS_SUCCESS,
  FETCHING_TRUCKS_FAIL,
  ADDING_TRUCK,
  ADDED,
  DELETING_TRUCK,
  DELETED,
  ERR,
  FAVING_TRUCK,
  FAV_TRUCK_SUCCESS,
  FAV_TRUCK_FAIL
} from "../actions";

const initialStateOperator = {
  isfetchingOperator: false,
  username: "",
  password: "",
  trucksOwned: [],
  allOtherTrucks: [],
  fetched: false,
  error: null,
};
const initialStateDiner = {
  isfetchingDiner: false,
  username: "",
  password: "",
  favoriteTrucks: [],
  allOtherTrucks: [],
  fetched: false,
  faved:false,
  error: null,
};

export const OperatorReducer = (
  state = initialStateOperator,
  action
) => {
  switch (action.type) {
    //  'FETCHING_TRUCKS'
    // 'FETCHING_TRUCKS_SUCCESS'
    // 'FETCHING_TRUCKS_FAIL'
    // 'ADDING_TRUCK'
    // 'ADDED'
    // 'ADDING_ERROR'
    // 'DELETING_TRUCK'
    // 'DELETED'
    // 'DEL_ERR'

    //   case CASE_GOES_HERE:
    //     return {

    //     }
    //

    // Operator fetch
    case FETCHING_TRUCKS:
      return {
        ...state,
        isfetchingOperator: true,
      };
    case FETCHING_TRUCKS_SUCCESS:
      return {
        ...state,
        isfetchingOperator: false,
        trucksOwned: action.payload,
        allOtherTrucks: action.payload,
      };
    case FETCHING_TRUCKS_FAIL:
      return {
        ...state,
        isfetchingOperator: false,
        error: "tHeRe wAs An ErRoR",
      };
    case ADDING_TRUCK:
      return {
        ...state,
        isfetchingOperator: true,
        fetched: false,
        trucksOwned: action.payload,
        allOtherTrucks: action.payload,
      };
    case ADDED:
      return {
        ...state,
        isfetchingOperator: false,
        fetched: true,
        trucksOwned: action.payload,
        allOtherTrucks: action.payload,
      };
    case ERR:
      return {
        ...state,
        isfetchingOperator: false,
        error: "tHeRe wAs An ErRoR",
      };
    case DELETING_TRUCK:
      return {
        ...state,
        isfetchingOperator: true,
        fetched: false,
      };
    case DELETED:
      return {
        ...state,
        isfetchingOperator: false,
        fetched: true,
        trucksOwned: action.payload,
        allOtherTrucks: action.payload,
      };

    default:
      return state;
  }
};

export const DinerReducer = (state = initialStateDiner, action) => {
  switch (action.type) {
    //  'FETCHING_TRUCKS'
    // 'FETCHING_TRUCKS_SUCCESS'
    // 'FETCHING_TRUCKS_FAIL'
    // 'ADDING_TRUCK'
    // 'ADDED'
    // 'ADDING_ERROR'
    // 'DELETING_TRUCK'
    // 'DELETED'
    // 'DEL_ERR'
    // FAVING_TRUCK,
    // FAV_TRUCK_SUCCESS,
    // FAV_TRUCK_FAIL

    //   case CASE_GOES_HERE:
    //     return {

    //     }
    //

    // Operator fetch
    case FETCHING_TRUCKS:
      return {
        ...state,
        isfetchingOperator: true,
      };
    case FETCHING_TRUCKS_SUCCESS:
      return {
        ...state,
        isfetchingOperator: false,
        trucksOwned: action.payload,
        allOtherTrucks: action.payload,
      };
    case FETCHING_TRUCKS_FAIL:
      return {
        ...state,
        isfetchingOperator: false,
        error: "tHeRe wAs An ErRoR",
      };
      case FAVING_TRUCK:
        return {
          ...state,
          isfetchingOperator: true,
          faved:false
        };
      case FAV_TRUCK_SUCCESS:
        return {
          ...state,
          isfetchingOperator: false,
          faved:true,
          allOtherTrucks: action.payload,
          favoriteTrucks: action.payload
        };
      case FAV_TRUCK_FAIL:
        return {
          ...state,
          isfetchingOperator: false,
          error: "tHeRe wAs An ErRoR",
        };

    default:
      return state;
  }
};
*/

import {combineReducers} from 'redux'
import {MenuReducer} from './MenuReducer'
import {DinerReducer, OperatorReducer} from './TruckReducer'

export default combineReducers({
    MenuReducer,
    DinerReducer,
    OperatorReducer
})

