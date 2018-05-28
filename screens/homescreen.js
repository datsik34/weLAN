import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, StatusBar, Platform} from 'react-native';
import Video from 'react-native-video';
import { Input, Button } from 'react-native-elements';

import Login from '../components/home/login.js'
import SignUp from '../components/home/signup.js'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _login = () => this.props.navigation.navigate('App');

  render() {
    return (
      <ImageBackground style={styles.containerBackground} blurRadius={0.5} source={require("../assets/images/resources/background.jpg")}>
        <View style={styles.container}>
          <Image  style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
          <Login _login={this._login}/>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  }
})
