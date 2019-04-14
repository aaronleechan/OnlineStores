import {USERNAME_CHANGE, USERPASSWORD_CHANGE,USER_SIGNIN,USER_SIGNIN_FAIL,USER_SIGNIN_SPINNER} from '../actions/types'
const INITIAL_STATE = {username: '',password: '', user: null,error: '', loading: false};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case USERNAME_CHANGE:
            return {...state,username: action.payload}
        case USERPASSWORD_CHANGE:
            return {...state,password: action.payload}
        case USER_SIGNIN: //User SIGN IN SUCCESS
            return {...state,...INITIAL_STATE,user: action.payload}
        case USER_SIGNIN_FAIL:
            return{...state, error: 'Authentication Failed', password: '', loading: false}
        case USER_SIGNIN_SPINNER:
            return{...state,error: '',loading: true, error: ''}
        default: 
            return state
    }
}