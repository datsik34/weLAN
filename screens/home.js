import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, StatusBar, Platform} from 'react-native';


import Login from '../components/home/login.js'
import SignUp from '../components/home/signup.js'

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={require("../assets/images/resources/background.jpg")}>

        <Image  style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
        <Login/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  }
})
