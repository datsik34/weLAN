import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

const stylesHeader = StyleSheet.create({
  logo: {
    width: 55,
    height: 55,
    marginLeft: 5,
    position: 'relative'
  }
})

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profil',
    headerLeft: (<Image source={require('../assets/images/resources/logo.svg.png')} style={stylesHeader.logo}/>),
    headerStyle: {
      backgroundColor: '#24323E',
      height: 64
    },
    headerTitleStyle: {
      color: '#ffffff',
      flex: 1,
      textAlign: 'center'
    },
    headerRight: (<Button title='Log Out' onPress={this._logOut}/>)
  };

  _logOut = () => this.props.navigation.navigate('Auth');
  _goToOrganize = () => this.props.navigation.navigate('Organize');
  _goToParticipate = () => this.props.navigation.navigate('Participate');

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>
          Profile Screen
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this._logOut} title='Log Out'/>
          <Button onPress={this._goToOrganize} title='Organiser'/>
          <Button onPress={this._goToParticipate} title='Participer'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172432'
  },
  buttonContainer: {
    position: 'absolute',
    bottom:0
  }
});
