import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import Pc from './platforms/pc';
import Ps4 from './platforms/ps4';
import XboxOne from './platforms/xboxone';
import NintendoSwitch from './platforms/nintendoswitch';

export default class PlatformsComponent extends React.Component {
  static navigationOptions = {
    title: '1/5 Choisis ta plateforme'
  };

  //Navigation
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
        <View style={styles.contBtn}>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGreen} titleStyle={styles.btnTitle} onPress={this._goToGames} title='SUIVANT'/>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGrey} titleStyle={styles.btnTitle} onPress={this._goBack} title='RETOUR'/>
        </View>
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
    color: '#172533',
    fontFamily: 'Montserrat-regular',
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnColorGreen: {
    backgroundColor: '#00b14c',
    borderRadius: 0
  },
  btnColorGrey: {
    backgroundColor: '#606060',
    borderRadius: 0
  },
  contBtn: {
    flexDirection: 'row-reverse',
    alignSelf: "stretch",
    justifyContent: 'space-between',
  },
  btnContStyle: {
    width: '50%'
  }
})
