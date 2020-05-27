import React from "react";
import { connect } from "react-redux";
import { getMenuItems } from "../actions/MenuActions";

const Menu = (props) => {
  return (
    <div>
      <div className="menu-list">
        {props.menu.map((props) => {
          return (
            <div>
   
              <p>{props.menu.fooditem}</p>
              <p>{props.menu.fooditem}</p>
              <p>{props.menu.fooditem}</p>
              <p>{props.menu.fooditem}</p>
              <p>{props.menu.fooditem}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Menu: state.Menu,
  };
};

export default connect(mapStateToProps, { getMenuItems })(Menu);
