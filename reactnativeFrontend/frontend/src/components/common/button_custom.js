import React from 'react';
import { Button,StyleSheet,View, TouchableOpacity } from 'react-native';


  const ButtonCustom = (props) => {
    return(
      <View style={styles.container}>
          <Button style={styles.button}
            onPress={props.onClick}
            title={props.title}
            accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  };
  
  
  export default ButtonCustom;


  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 5,
    },
    button:{
      backgroundColor: '#ffffff',
      height: 100,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });