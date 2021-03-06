import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class SignUp extends React.Component {

  render() {
    return (
      <View style={styles.login}>
        <Input inputContainerStyle={styles.inputContStyle} inputStyle={styles.inputStyle} placeholderTextColor={'white'} placeholder='NICKNAME'/>
        <Input inputContainerStyle={styles.inputContStyle} inputStyle={styles.inputStyle} placeholderTextColor={'white'} placeholder='EMAIL' keyboardType={'email-address'}/>
        <Input inputContainerStyle={styles.inputContStyle} inputStyle={styles.inputStyle} placeholderTextColor={'white'} placeholder='PASSWORD' secureTextEntry={true}/>
        <Input inputContainerStyle={styles.inputContStyle} inputStyle={styles.inputStyle} placeholderTextColor={'white'} placeholder='DATEOFBIRTH'/>
        <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColor} titleStyle={styles.btnTitle} onPress={this.props._signup} title='SIGNUP'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    width: 300,
    alignItems: 'center'
  },
  inputStyle: {
    color: 'white',
  },
  btnTitle: {
    color: '#172533',
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
    borderColor: 'white'
  }
})
