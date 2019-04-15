import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import TextInputCustom from './common/text_input'
import ButtonCustom from './common/button_custom'
import Spinner from './common/Spinner'
import {ChangepasswordText,ChangeusernameText,LogInUser} from '../actions'
import {NavigationActions,NavigationAction} from 'react-navigation'

class LogIn extends React.Component{
    onChangeusernameText(text){
        this.props.ChangeusernameText(text);
    }

    onChangepasswordText(text){
        this.props.ChangepasswordText(text);
    }

    login(){
        const { username,password } = this.props
        this.props.LogInUser({username,password})
    }
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={StyleSheet.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }
    signup(){
        console.log("Click Sign UP    ");
    }
    PressRow(){
        console.log("Click Press Row  ");
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'/>
        }
        return (
            <View>
                <ButtonCustom title="Log In" onClick={this.login.bind(this)}/>
                <ButtonCustom title="Sign Up"onClick={this.signup.bind(this)}/>
            </View>
        )
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                {this.renderError()}
                <TextInputCustom placeholder="username" onChangeText={this.onChangeusernameText.bind(this)} value={this.props.username}/>
                <TextInputCustom placeholder="password" onChangeText={this.onChangepasswordText.bind(this)} value={this.props.password}/>
                {this.renderButton()}
                <Button title="Test" onPress={(this.PressRow.bind(this))} />   
            </View>
        )
    }
}

const styles = {
    container:{
        flex: 1
    },
    errorTextStyle:{
        fontSize: 12,
        alignSelf: 'center',
        color: 'red'
    }
}



const mapStateToProps = state =>({
    username: state.auth.username,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
})

const mapDispatchToProps = (state) =>({

})

export default connect(mapStateToProps,{ ChangeusernameText,ChangepasswordText,LogInUser})(LogIn)

