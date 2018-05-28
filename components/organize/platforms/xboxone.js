import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, CheckBox } from 'react-native';

export default class XboxOne extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.backgroundImage}>
        <Image
          source={require('../../../assets/images/platforms/xboxone.jpg')}
          style={styles.backgroundImage}
        />
        <Text style={styles.text}>XBOXONE</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage : {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
