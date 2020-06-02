import {
  FETCHING_TRUCKS,
  FETCHING_TRUCKS_SUCCESS,
  ADDING_TRUCK,
  ADDED,
  DELETING_TRUCK,
  ERR,
  EDITING_TRUCK,
  EDITING_TRUCK_SUCCESS
} from "../actions/TruckActions";

const initialState = {
  isfetching:false,
  truck:[{}],
};

export const TruckReducer = (state = initialState,action) => {
  switch (action.type) {

    case FETCHING_TRUCKS:
      return {
        ...state,
        isfetching: true,
      };
    case FETCHING_TRUCKS_SUCCESS:
      return {
        ...state,
        isfetching: false,
        truck: action.payload
      };
    case ADDING_TRUCK:
      return {
        ...state,
        name: action.payload,
        cuisine_type: action.payload,
        customer_rating: action.payload
      };
    case ADDED:
      return {
        ...state,
      };
    case ERR:
      return {
        ...state,
        isfetching: false,
        error: "tHeRe wAs An ErRoR",
      };
    case DELETING_TRUCK:
      return {
        ...state,
        truck: action.payload,
      };
      case EDITING_TRUCK:
      return {
        ...state,
        truck: action.payload
      };
    case EDITING_TRUCK_SUCCESS:
      return {
        ...state,
        truck: action.payload
      };

    default:
      return state;
  }
};