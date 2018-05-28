import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import Pc from './platforms/pc';
import Ps4 from './platforms/ps4';
import XboxOne from './platforms/xboxone';
import NintendoSwitch from './platforms/nintendoswitch';

export default class PlatformsComponent extends React.Component {
  _goToGames = () => this.props.navigation.navigate('Games');
  _goBack = () => this.props.navigation.navigate('Profile');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Grid>
            <Row style={styles.rowgrid}>
              <Col><Pc/></Col>
              <Col><Ps4/></Col>
            </Row>
            <Row style={styles.rowgrid}>
              <Col><XboxOne/></Col>
              <Col><NintendoSwitch/></Col>
            </Row>
          </Grid>
        </ScrollView>
        <View style={styles.buttonBottom}>
          <Button onPress={this._goToGames} title='Suivant'/>
          <Button  onPress={this._goBack} title='retour'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172432',
  },
  buttonBottom: {
    position: 'absolute',
    bottom:0
  },
  text: {
    color: 'white'
  },
  grid: {
    backgroundColor: 'red'
  },
  rowgrid: {
    height: 200
  },
})
