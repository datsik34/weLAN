import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import CsGo from './games/csgo.js'
import Fortnite from './games/fortnite.js'
import LoL from './games/lol.js'
import Sc2 from './games/sc2.js'
import OverWatch from './games/overwatch.js'
import Left4Dead2 from './games/left4dead2.js'

export default class GamesComponent extends React.Component {
  static navigationOptions = {
    title: '2/5 Choisis ton jeu'
  };

  constructor(){
    super();
    this.state = { gamesSelected: 0 }
  }
  _goToDate = () => this.props.navigation.navigate('Date');
  _goBack = () => this.props.navigation.navigate('Platforms');
  picked = () => this.setState({ gamesSelected: this.state.gamesSelected + 1})
  unpicked = () => this.setState({ gamesSelected: this.state.gamesSelected - 1})

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Grid>
            <Row style={styles.rowgrid}>
              <Col>
                <Fortnite picked={this.picked} unpicked={this.unpicked}/>
              </Col>
              <Col>
                <Sc2 picked={this.picked} unpicked={this.unpicked}/>
              </Col>
            </Row>
            <Row style={styles.rowgrid}>
              <Col>
                <CsGo picked={this.picked} unpicked={this.unpicked}/>
              </Col>
              <Col>
                <LoL picked={this.picked} unpicked={this.unpicked}/>
              </Col>
            </Row>
            <Row style={styles.rowgrid}>
              <Col>
                <Left4Dead2 picked={this.picked} unpicked={this.unpicked}/>
              </Col>
              <Col>
                <OverWatch picked={this.picked} unpicked={this.unpicked}/>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
        <View style={styles.contBtn}>
          <Button
            title='SUIVANT'
            titleStyle={styles.btnStyle}
            containerStyle={styles.btnContStyle}
            buttonStyle={this.state.gamesSelected > 0 ? styles.btnColorGreen : styles.btnColorGrey}
            onPress={this.state.gamesSelected > 0 ? this._goToDate : null}
          />
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGrey} titleStyle={styles.btnStyle} onPress={this._goBack} title='RETOUR'/>
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
  btnStyle: {
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
