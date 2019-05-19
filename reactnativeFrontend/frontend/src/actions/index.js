import firebase from 'firebase'
import {
        USERNAME_CHANGE, USERPASSWORD_CHANGE,USER_SIGNIN, USER_SIGNIN_FAIL,USER_SIGNIN_SPINNER,
        FOODNAME_CHANGE, FOODABOUT_CHANGE,FOODPRICE_CHANGE, FOODCREATE_CHANGE, FOODLIST_CHANGE,
       } 
        from './types' 
import { Actions } from 'react-native-router-flux'

export const ChangefoodName = (text)=>{
    return{
        type: FOODNAME_CHANGE,
        payload: text
    }
}

export const ChangefoodAbout = (text)=>{
    return{
        type: FOODABOUT_CHANGE,
        payload: text
    }
}

export const ChangefoodPrice = (text)=>{
    return{
        type: FOODPRICE_CHANGE,
        payload: text
    }
}

export const ChangeusernameText = (text) => {
    return {
        type: USERNAME_CHANGE,
        payload: text
    };
}

export const ChangefoodList = () =>{
    return function(dispatch){
        const graphQLAPICall = {
            query: `
                query{
                    food{
                        name
                        price
                        about
                    }
                }
            `
        }
        return fetch('http://localhost:3000/graphql?',{
            method: 'POST',
            body: JSON.stringify(graphQLAPICall),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed');
            }
            // console.log(res);
            dispatch({
                type: FOODLIST_CHANGE,
                payload: res._bodyText
            })
        })
        .catch(err=>{
            console.log(err);
        });
    }
}

export const ChangefoodCreate = obj => {
    return function(dispatch){
        const graphQLAPICall = {
            query: `
                    mutation{
                            createfood(foodInput:{name: "${obj['foodname']}", price: "${obj['foodprice']}", about: "${obj['foodabout']}"}){
                        name
                    }
                }`
        }
        return fetch('http://localhost:3000/graphql?',{
            method: 'POST',
            body: JSON.stringify(graphQLAPICall),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed!');
            }
            dispatch({
                type: FOODCREATE_CHANGE,
                payload: obj['foodname']
            })
            Actions.main()
        })
        .catch(err=>{
            console.log(err);
        });
    }
};

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
    Actions.main()
}
