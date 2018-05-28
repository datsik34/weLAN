import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, StatusBar, Platform} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Font, Video } from 'expo';

import Login from '../components/home/login.js'
import SignUp from '../components/home/signup.js'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _login = () => this.props.navigation.navigate('App');

  componentDidMount() {
      Font.loadAsync({
        'Teko-Light': require('../assets/fonts/Teko-Light.ttf'),
        'Teko-Bold': require('../assets/fonts/Teko-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      });
  }

  render() {
    return (
      // <ImageBackground style={styles.containerBackground} blurRadius={0.5} source={require("../assets/images/resources/background.jpg")}>
      //   <View style={styles.container}>
      //     <Image  style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
      //     <Login _login={this._login}/>
      //   </View>
      // </ImageBackground>

      <View style={styles.containerVideo}>
        <Video
          source={require('../assets/movies/test.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
          }}
        />
        <View style={styles.containerLogo}>
          <Image  style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
        </View>
        <View style={styles.containerLogin}>
          <Login _login={this._login}/>
        </View>
        <View style={styles.containerLogin}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // containerBackground: {
  //   flex: 1,
  //   marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  // },
  containerLogo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,

  },
  containerVideo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
