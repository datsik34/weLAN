import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import Pc from './platforms/pc';
import Ps4 from './platforms/ps4';
import XboxOne from './platforms/xboxone';
import NintendoSwitch from './platforms/nintendoswitch';

const stylesHeader = StyleSheet.create({
  logo: {
    width: 55,
    height: 55,
    marginLeft: 5,
    position: 'relative'
  }
})

export default class PlatformsComponent extends React.Component {
  static navigationOptions = {
    title: '1/5 Choisis ta plateforme'
  };

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
        <Button buttonStyle={styles.btnColorGreen} titleStyle={styles.btnTitle} onPress={this._goToGames} title='SUIVANT'/>
        <Button buttonStyle={styles.btnColorGrey} titleStyle={styles.btnTitle} onPress={this._goBack} title='RETOUR'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172533',
  },
  grid: {
    backgroundColor: 'red'
  },
  rowgrid: {
    height: 200
  },
  btnTitle: {
    color: 'black',
    fontFamily: 'Montserrat-regular',
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnColorGreen: {
    backgroundColor: '#00b14c'
  },
  btnColorGrey: {
    backgroundColor: '#606060'
  }
})
