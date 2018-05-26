import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input } from 'react-native-elements';

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Input placeholder='BASIC INPUT'/>
        <Input placeholder='INPUT WITH ICON'/>
        <Text style={{color:'white'}}>azertyuiop</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
