import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class PlaceComponent extends React.Component {

  _goToOptions = () => this.props.navigation.navigate('Options');
  _goBack = () => this.props.navigation.navigate('Date');

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Place Component
        </Text>
        <Button onPress={this._goToOptions} title='Suivant'/>
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
