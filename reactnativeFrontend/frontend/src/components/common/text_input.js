import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';


  const TextInputCustom = (props) => {
    return(
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            autoCapitalize="none"
            placeholderTextColor='black'
            value = {props.value}
            onChangeText={val => props.onChangeText(val)}
          />
      </View>
    );
  };
  
  
  export default TextInputCustom;


  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 1,
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#F7F3F1',
        margin: 10,
        padding: 8,
        color: '#060201',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      }
  });