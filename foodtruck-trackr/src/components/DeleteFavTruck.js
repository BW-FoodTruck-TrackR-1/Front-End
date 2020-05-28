import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {connect} from 'react-redux';
// import addTruck, { ADDED, DELETED } from '../actions/TruckActions';
import * as TruckActions from '../actions/TruckActions'