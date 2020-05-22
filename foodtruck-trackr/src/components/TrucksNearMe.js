import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import { connect } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import {getTrucks} from '../actions/index'


function TrucksNearMe() {

 getTrucks()
 function getTrucksNearMe(){

        getTrucks.data.map(res=>{
            // res.filter(based on a callback of some kind)
        })


 }



}

