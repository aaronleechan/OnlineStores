import firebase from 'firebase'
import {USERNAME_CHANGE, USERPASSWORD_CHANGE,USER_SIGNIN, USER_SIGNIN_FAIL,USER_SIGNIN_SPINNER} from './types'
import {NavigationActions, StackActions} from 'react-navigation'


// const navigateAction = NavigationActions.navigate({
//     routeName: 'Profile',
//     action: NavigationActions.navigate({routeName: 'SubProfileRoute'}),
// });

// this.PaymentResponse.navigation.dispatch(navigateAction)

export const ChangeusernameText = (text) => {
    return {
        type: USERNAME_CHANGE,
        payload: text
    };
}

export const ChangepasswordText = (text) =>{
    return{
        type: USERPASSWORD_CHANGE,
        payload: text
    }
}

export const LogInUser = ({username,password})=>{
    return(dispatch) =>{
        dispatch({type: USER_SIGNIN_SPINNER});
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(user => USERLOGIN_HELPER(dispatch,user))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(username,password)
            .then(user=> USERLOGIN_HELPER(dispatch,user))
            .catch(() => USERLOGIN_FAIL(dispatch));
        })
    };
};


const USERLOGIN_FAIL = (dispatch,user)=>{
    dispatch({ type: USER_SIGNIN_FAIL})
}

const USERLOGIN_HELPER = (dispatch,user) =>{
    dispatch({
        type: USER_SIGNIN,
        payload: user
    })
}
