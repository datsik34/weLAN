import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
export default class OrganizeScreen extends React.Component {

  _goBack = () => this.props.navigation.navigate('Profile');

  render() {
    return (
      <View>
        <Text>
          Organize Screen
        </Text>
        <Button onPress={this._goBack} title='retour'/>
      </View>
    );
  }
}
