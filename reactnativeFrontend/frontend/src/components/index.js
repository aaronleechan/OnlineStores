import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Initialpage from './Initialpage'

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Initialpage/>
      </View>
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
});

