import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LogIn from '../LogIn'
import FoodList from '../FoodList'
import FoodDetail from '../FoodDetail'

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LogIn} title="Welcome" initial/>
                </Scene>
                <Scene key="main">
                    <Scene rightTitle="Add Item" onRight={() => { console.log('right!!!') }} key="foodList" component={FoodList} title="Food"/>
                    <Scene key="foodDetail" component={FoodDetail} title="Details"/>
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent