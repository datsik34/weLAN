import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class DateComponent extends React.Component {
  static navigationOptions = {
    title: '3/5 Choisis ta date'
  };
  _goToPlace = () => this.props.navigation.navigate('Place');
  _goBack = () => this.props.navigation.navigate('Games');
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        </ScrollView>
        <Button titleStyle={styles.btnStyle} onPress={this._goToPlace} title='SUIVANT'/>
        <Button titleStyle={styles.btnStyle} onPress={this._goBack} title='RETOUR'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172533',
  },
  btnStyle: {
    color: 'black',
    fontFamily: 'Montserrat-regular',
    fontSize: 22,
    fontWeight: 'bold'
  }
})
