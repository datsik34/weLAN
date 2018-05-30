import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class CsGo extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.backgroundImage}>
        <Image
          source={require('../../../assets/images/games/wallpaper/csgo.jpg')}
          style={styles.backgroundImage}
          blurRadius={0.5}
        />
        <Image
          source={require('../../../assets/images/games/logo/csgo-logo.png')}
          style={styles.logoImage}
        />
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
  logoImage: {
    width: '100%',
    height: '70%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    resizeMode: 'center'
  }
})
