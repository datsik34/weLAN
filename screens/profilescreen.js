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
    headerRight: (<Button title='Log Out' onPress={this.logOut}/>)
  };


  logOut = () => this.props.navigation.navigate('Auth');
  goToOrganize = () => this.props.navigation.navigate('Organize');
  goToParticipate = () => this.props.navigation.navigate('Participate');

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Profile Screen
        </Text>

        <Button onPress={this.logOut} title='Log Out'/>
        <Button onPress={this.goToOrganize} title='Organiser'/>
        <Button onPress={this.goToParticipate} title='Participer'/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
