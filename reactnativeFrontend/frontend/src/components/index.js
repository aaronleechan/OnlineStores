import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';
import LogIn from './LogIn'


export default class Index extends React.Component {
    render() {
        return (
        <ImageBackground source={require('./image/backgroundimage.jpg')} style={{width: '100%',height:'100%'}}>
            <View style={styles.form}>
              <LogIn/>
            </View>
            <View style={styles.logo}>
              <Image source={require('./image/logo.jpg')}/>
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form:{
    flex: 2,
    paddingBottom: 20,
    paddingTop: 150
  },
});

