import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

export default class Login extends React.Component {


  render() {
    return (
      <View style={styles.login}>
        <Input placeholder='BASIC INPUT'/>
        <Input placeholder='INPUT WITH ICON'/>
        <Button onPress={this._login} title='LOGIN'/>
      </View>
    )
  }
  _login = () => this.props.navigation.navigate('App');
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  login: {
    width: 250
  }
})
