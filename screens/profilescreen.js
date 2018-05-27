import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class ProfileScreen extends React.Component {

  logOut = () => this.props.navigation.navigate('Auth');
  goToOrganize = () => this.props.navigation.navigate('Organize');
  goToParticipate = () => this.props.navigation.navigate('Participate');

  render() {
    return (
      <View>
        <Text>
          Profile Screen
        </Text>
        <Button onPress={this.logOut} title='LogOut'/>
        <Button onPress={this.goToOrganize} title='Organiser'/>
        <Button onPress={this.goToParticipate} title='Participer'/>
      </View>
    );
  }
}
