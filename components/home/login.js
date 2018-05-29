import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

export default class Login extends React.Component {


  render() {
    return (
      <View style={styles.login}>
        <Input inputContainerStyle={styles.inputContStyle} inputStyle={styles.inputStyle} placeholderTextColor={'white'} placeholder='NICKNAME / EMAIL'/>
        <Input inputContainerStyle={styles.inputContStyle} inputStyle={styles.inputStyle} placeholderTextColor={'white'} placeholder='PASSWORD' secureTextEntry={true}/>
        <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColor} titleStyle={styles.btnTitle} onPress={this.props._login} title='LOGIN'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  login: {
    width: 280,
    alignItems: 'center',
  },
  inputStyle: {
    color: 'white',
  },
  btnTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnColor: {
    backgroundColor: '#00b14c',
    width: 230,
    marginBottom: 6
  },
  btnContStyle: {
    marginTop: 20
  },
  inputContStyle: {
    borderColor: 'white',
  }
})
