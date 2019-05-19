import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import FoodReducer from './FoodReducer'

export default combineReducers({
    auth: AuthReducer,
    food: FoodReducer,
})