import {FOODNAME_CHANGE, FOODABOUT_CHANGE,FOODPRICE_CHANGE, FOODCREATE_CHANGE, FOODLIST_CHANGE} from '../actions/types'
const INITIAL_STATE = {foodName: '',foodAbout: '', foodPrice: ''};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FOODNAME_CHANGE:
            return {...state,foodname: action.payload}
        case FOODABOUT_CHANGE:
            return {...state,foodabout: action.payload}
        case FOODPRICE_CHANGE:
            return {...state,foodprice: action.payload}
        case FOODCREATE_CHANGE:
            return{...INITIAL_STATE, foodcreate: action.payload}
        case FOODLIST_CHANGE:
            return{...state,foodlist: action.payload}
        default: 
            return state
    }
}