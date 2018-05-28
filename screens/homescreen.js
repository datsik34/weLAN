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
      <ImageBackground style={styles.container} source={require("../assets/images/resources/background.jpg")}>
        <View style={styles.container}>
          <Image  style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
          {/* <Login/> */}
          <Button onPress={this._login} title='LOGIN'/>
        </View>
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
