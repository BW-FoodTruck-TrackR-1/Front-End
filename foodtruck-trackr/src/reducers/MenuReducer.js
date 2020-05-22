
import {
    FETCHING_MENU_ITEMS,
    FETCHING_MENU_ITEMS_SUCCESS,
    FETCHING_MENU_ITEMS_FAIL
    
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
        default:
      return state;
  }
};