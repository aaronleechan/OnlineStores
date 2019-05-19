import React from 'react';
import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import { ChangefoodList } from '../actions/index'
import {connect} from 'react-redux';

class FoodList extends React.Component{

    componentWillMount(){
        this.props.ChangefoodList()
    }

    ViewRender(){
        let value = JSON.parse(this.props.foodlist);
        return(
            value.data.food.map(val=>{
                return(
                    <View style={styles.secondcontainer}>
                        <View style={styles.bodycontainer}>
                            <Text style={styles.titleStyle}>{val.name}</Text>
                            <Text style={styles.priceStyle}>{val.price}$</Text>
                        </View>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={{width: "100%",height: "100%"}} 
                                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                            />
                        </View>
                    </View>
                )  
            })
        )     
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                {this.props.foodlist ? this.ViewRender() : <Text>Not Appear</Text>}
            </ScrollView>
        )
    }
}

const mapStateToProps = state =>({
    foodlist: state.food.foodlist
})

export default connect(mapStateToProps,{ChangefoodList})(FoodList)
const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        flexDirection: 'column',
    },
    secondcontainer:{
        flexDirection: 'row',
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    imagecontainer:{
        width: '25%',
        height: 85,
        alignSelf: 'center',
    },
    titleStyle:{
        fontSize: 30,
        color: 'blue',
        fontFamily: 'Cochin',
        alignSelf: 'center',
    },
    priceStyle:{
        fontSize: 20,
        color: 'blue',
        fontFamily: 'Cochin',
        alignSelf: 'flex-end',
    },
    bodycontainer:{
        width: '75%',
        height: 85,
    }

})