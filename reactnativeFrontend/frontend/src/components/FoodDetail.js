import React, {useEffect} from 'react';
import { View, Text } from 'react-native'
import { ChangefoodList } from '../actions/index'
import {connect} from 'react-redux';


// class FoodDetail extends React.Component{
//     componentWillMount(){
//         console.log("This is Component will Mount")
//         ChangefoodList()
//     }
//     render(){
//         console.log("WHy it is Food Detail????");
//         return(
//             <View>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//                 <Text>This is FoodDetail Page</Text>
//             </View>
//         )
//     }
// }

const FoodDetail = (props) =>{
    console.log("!!!!!!!! Come in here Food Detail");
    // useEffect(()=>{
    //     console.log("This is Food Detail List");
    //     props.ChangefoodList()
    // })

    return(
        <View>
            <Text>This is FoodDetail Come in?</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
            <Text>This is FoodDetail Page</Text>
        </View>
    )
}

const mapStateToProps = state =>{
    
}

export default connect(mapStateToProps,{ChangefoodList})(FoodDetail)