
import {
    FETCHING_MENU_ITEMS,
    FETCHING_MENU_ITEMS_SUCCESS,
    FETCHING_MENU_ITEMS_FAIL,
ADD_MENU_ITEM,
ADD_MENU_ITEM_SUCCESS,
ADD_MENU_ITEM_FAIL,
DELETE_MENU_ITEM,
DELETE_MENU_ITEM_SUCCESS,
DELETE_MENU_ITEM_FAIL 
    
  } from "../actions/MenuActions";

  const initialStateMenu = {
    isfetchingMenu: false,
    trucksOwned: [],
    allOtherTrucks: [],
    favoriteTrucks: [],
    fetched: false,
    error: null,
  };


  export const MenuReducer = (
    state = initialStateMenu,
    action
  ) => {
    switch (action.type) {

      case FETCHING_MENU_ITEMS:
        return {
          ...state,
          isfetchingMenu: true,
        };
      case FETCHING_MENU_ITEMS_SUCCESS:
        return {
          ...state,
          isfetchingMenu: false,
          trucksOwned: action.payload,
          allOtherTrucks: action.payload,
          favoriteTrucks:action.payload
        };
      case FETCHING_MENU_ITEMS_FAIL:
        return {
          ...state,
          isfetchingMenu: false,
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
      // -----
      case ADD_MENU_ITEM:
        return {
          ...state,
          isfetchingOperator: true,
          fetched: false,
          trucksOwned: action.payload,
          allOtherTrucks: action.payload,
        };
      case ADD_MENU_ITEM_SUCCESS:
        return {
          ...state,
          isfetchingOperator: false,
          fetched: true,
          trucksOwned: action.payload,
          allOtherTrucks: action.payload,
        };
      case ADD_MENU_ITEM_FAIL:
        return {
          ...state,
          isfetchingOperator: false,
          error: "tHeRe wAs An ErRoR",
        };
      case DELETE_MENU_ITEM:
        return {
          ...state,
          isfetchingOperator: true,
          fetched: false,
        };
      case DELETE_MENU_ITEM_SUCCESS:
        return {
          ...state,
          isfetchingOperator: false,
          fetched: true,
          trucksOwned: action.payload,
          allOtherTrucks: action.payload,
        };
        case DELETE_MENU_ITEM_FAIL:
          return {
            ...state,
            isfetchingOperator: false,
            error: "tHeRe wAs An ErRoR",
          };


        default:
      return state;
  }
};