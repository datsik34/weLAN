import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


export default class OrganizeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _goBack = () => this.props.navigation.navigate('Profile');

  render(){
    return (
      <View style={styles.container}>
        <OrganizeStack/>
        <Button onPress={this._goBack} title='retour'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
