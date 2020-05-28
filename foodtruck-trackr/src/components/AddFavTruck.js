import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Truck from '../Truck';




import * as TruckActions from '../actions/TruckActions'




const FavoriteTrucks = ({trucks, getTrucks}) => {


    useEffect(() => {
        getTrucks();
    }, []);

    return (
        <div>
            <div>
                {trucks.map(item => (
                    <Truck truck={item} buttonText='Remove' />
                ))}

            </div>
        </div>
    )


}

export default connect(
    state => state,
    TruckActions
)(FavoriteTrucks);