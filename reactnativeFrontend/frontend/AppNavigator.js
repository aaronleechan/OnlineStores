import { createStackNavigator, createAppContainer } from 'react-navigation';
import Index from './src/components/index';
import Test from './src/components/test'

const AppNavigator = createStackNavigator(
    {
        Home: {screen: Index},
        Test: {screen: Test}
    },
    {
        initialRouteName: 'Home'
    }
)

// const AppNavigator = createAppContainer(Navigator)

export default AppNavigator