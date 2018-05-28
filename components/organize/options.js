import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class OptionsComponent extends React.Component {

  _goToSummary = () => this.props.navigation.navigate('Summary');
  _goBack = () => this.props.navigation.navigate('Place');
  render(){
    return(
      <View style={styles.container}>
        <Text>
          Options Component
        </Text>
        <Button onPress={this._goToSummary} title='Suivant'/>
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
