import {combineReducers} from 'redux'
import {MenuReducer} from './MenuReducer'
import {DinerReducer, OperatorReducer} from './TruckReducer'

export default combineReducers({
    MenuReducer,
    DinerReducer,
    OperatorReducer
})