import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Video } from 'expo';
import { connect } from 'react-redux';

import Login from '../components/home/login.js'
import SignUp from '../components/home/signup.js'

function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(){
    super();
    this.state = { showingLogin: true }
  }

  goToLogin = () => this.props.navigation.navigate('App');

  //fonction Switch Login/SignUp
  _toggleLogin = () => this.setState({ showingLogin: true })
  _toggleSignUp = () => this.setState({ showingLogin: false })

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
          {renderIf(this.state.showingLogin, <Login onSubmit={(value) => this.props._login.bind(this)(value)}/>)}
          {renderIf(!this.state.showingLogin, <SignUp onSubmit={(value) => this.props._signup.bind(this)(value)}/>)}
        </View>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    _login: function(value) {
      this.goToLogin();
      // fetch('https://welan-server.herokuapp.com/login', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      //   body: `email=${value.email}&password=${value.pwd}`
      // })
      // .then(response => response.json())
      // .then(data => {
      //   if (data.success) {
      //     dispatch({
      //       type: 'login',
      //       user: data.user
      //     });
      //     this.goToLogin();
      //   } else {
      //     throw new Error("can't loggin")
      //   }
      // }).catch(e => {
      //   console.log(e);
      // });
    },
    _signup : function(value) {
      fetch('https://welan-server.herokuapp.com/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `usename=${value.nickname}&email=${value.email}&password=${value.pwd}&birthday=${value.dateofbirth}`
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          dispatch({
            type: 'signup',
            user: data.user
          });
          this.goToLogin();
        } else {
          throw new Error("can't loggin")
        }
      }).catch(e => {
        console.log(e);
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  containerVideo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
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
