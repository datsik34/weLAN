import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class OptionsComponent extends React.Component {
  static navigationOptions = {
    title: '5/5 Finalise avec tes options'
  };
  _goToSummary = () => this.props.navigation.navigate('Summary');
  _goBack = () => this.props.navigation.navigate('Place');
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        </ScrollView>
        <Button titleStyle={styles.btnStyle} onPress={this._goToSummary} title='SUIVANT'/>
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
