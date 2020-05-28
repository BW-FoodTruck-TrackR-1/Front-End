import React, { useEffect } from "react";
import { connect } from "react-redux";
import TruckCard from "../TruckCard";
import * as TruckActions from "../actions/TruckActions";

const FavoriteTrucks = ({ trucks, getTrucks }) => {
  useEffect(() => {
    getTrucks();
  }, []);

  return (
    <div>
      <div class="addtofavs">
        {trucks.map((item) => (
          <button truck={item} onClick={this.favTruck}></button>
        ))}
      </div>

      <div class="delete" > 
        {trucks.map((item) => (
          <TruckCard truck={item} buttonText="Remove" />
        ))}
      </div>
    </div>
  );
};

export default connect((state) => state, TruckActions)(FavoriteTrucks);
