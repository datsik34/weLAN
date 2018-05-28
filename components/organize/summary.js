import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SummaryComponent extends React.Component {

  _goToProfile = () => this.props.navigation.navigate('Profile');
  _goBack = () => this.props.navigation.navigate('Options');
  render(){
    return(
      <View style={styles.container}>
        <Text>
          Summary Component
        </Text>
        <Button onPress={this._goToProfile} title='Suivant'/>
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
