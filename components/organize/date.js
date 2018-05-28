import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class DateComponent extends React.Component {

  _goToPlace = () => this.props.navigation.navigate('Place');
  _goBack = () => this.props.navigation.navigate('Games');
  render(){
    return(
      <View style={styles.container}>
        <Text>
          Date Component
        </Text>
        <Button onPress={this._goToPlace} title='Suivant'/>
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
