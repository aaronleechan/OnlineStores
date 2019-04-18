import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import TextInput from './common/text_input';
import ButtonCustom from './common/button_custom';
import {ChangefoodAbout,ChangefoodCreate,ChangefoodName,ChangefoodPrice} from '../actions/index';
import {connect} from 'react-redux';

class FoodCreate extends React.Component{

    onChangeFoodName(text){
        this.props.ChangefoodName(text)
    }

    onChangeFoodAbout(text){
        this.props.ChangefoodAbout(text)
    }

    onChangeFoodPrice(text){
        this.props.ChangefoodPrice(text)
    }

    onChangeCreate(text){
        this.props.ChangefoodCreate(text)
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <TextInput placeholder="Name" onChangeText={this.onChangeFoodName.bind(this)} value={this.props.foodname}/>
                <TextInput multiline = "true" placeholder="About" onChangeText={this.onChangeFoodAbout.bind(this)} value={this.props.aboutfood}/>
                <TextInput placeholder="Price" onChangeText={this.onChangeFoodPrice.bind(this)} value={this.props.foodprice}/>
                <ButtonCustom title="Create" onPress={this.onChangeCreate.bind(this)}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps,{ChangefoodAbout,ChangefoodCreate,ChangefoodName,ChangefoodPrice})(FoodCreate)

const styles ={
    container:{
        flex: 1,

    }
}