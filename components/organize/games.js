import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class GamesComponent extends React.Component {

  _goToDate = () => this.props.navigation.navigate('Date');
  _goBack = () => this.props.navigation.navigate('Platforms');

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Games Component
        </Text>
        <Button onPress={this._goToDate} title='Suivant'/>
        <Button onPress={this._goBack} title='Retour'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
