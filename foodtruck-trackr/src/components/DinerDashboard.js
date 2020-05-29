import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Link, useParams, useHistory, Route } from "react-router-dom";
import SearchTrucks from "./SearchTrucks";
import FavTrucks from "./FavTrucks.js";
import { addTruck } from "../actions/TruckActions";
import styled from "styled-components";
import TruckCard from "./TruckCard";

export default function DinerDashboard() {
  return (
    <div>
      {/* <SearchTrucks />
      <TruckCard />
      <FavTrucks /> */}
      hi this is the diner dashboard
    </div>
  );

  // addTruck
  // updateMenu
}
