import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default class Ps4 extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.backgroundImage} onPress={this.props._toggleCheck}>
        <Image
          source={require('../../../assets/images/platforms/ps4.jpg')}
          style={styles.backgroundImage}
        />
        <Text style={styles.text}>PS4</Text>
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
