import React from 'react';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import AppNavigator from './AppNavigator'
import Index from './src/components/index'
import { createAppContainer } from 'react-navigation'

let Navigate = createAppContainer(AppNavigator)

export default class App extends React.Component {

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyAoz_eh-dUtK1zsAGmQTA3C5awZNpFqvHc",
        authDomain: "onlinestore-974d3.firebaseapp.com",
        databaseURL: "https://onlinestore-974d3.firebaseio.com",
        projectId: "onlinestore-974d3",
        storageBucket: "onlinestore-974d3.appspot.com",
        messagingSenderId: "191260080184"
    })
  }

  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Navigate/>
      </Provider>
    );
  }
}

