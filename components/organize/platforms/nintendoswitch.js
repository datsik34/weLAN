import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default class NintendoSwitch extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.backgroundImage}>
        <Image
          source={require('../../../assets/images/platforms/nintendoswitch.jpg')}
          style={styles.backgroundImage}
        />
        <Text style={styles.text}>SWITCH</Text>
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
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal'
  }
})
