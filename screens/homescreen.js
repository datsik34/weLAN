import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, StatusBar, Platform} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Font, Video } from 'expo';

import Login from '../components/home/login.js'
import SignUp from '../components/home/signup.js'


function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(){
    super();
    this.state = { showLoggin: true }
  }

  //fonctions Connexion/Création de compte
  _login = () => this.props.navigation.navigate('App');
  _signup = () => console.log('click signup');

  //fonctions affichage Login/SignUp
  _toggleLogin = () => this.setState({showLoggin: true});
  _toggleSignUp = () => this.setState({showLoggin: false});


  render() {
    return (
      <View style={styles.containerVideo}>
        <Video
          source={require('../assets/movies/test.mp4')}
          rate={1}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
        <View style={styles.containerLogo}>
          <Image  style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
        </View>
        <View style={styles.containerLogin}>
          <View style={styles.btnContainer}>
            <Button titleStyle={styles.btnTitle} onPress={this._toggleLogin} clear={true} title='Login'/>
            <Button titleStyle={styles.btnTitle} onPress={this._toggleSignUp} clear={true} title='Sign Up'/>
          </View>
          {renderIf(this.state.showLoggin, <Login _login={this._login}/>)}
          {renderIf(!this.state.showLoggin, <SignUp _signup={this._signup}/>)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerVideo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    flex: 1.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogin: {
    flex: 1,
    marginBottom: 150,
  },
  logo: {
    marginTop: 60,
    width: 230,
    height: 230,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  btnTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
  btnContainer: {
    alignSelf: "stretch",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  }
})
