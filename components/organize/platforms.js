import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { CheckBox } from 'react-native-elements';

import Pc from './platforms/pc';
import Ps4 from './platforms/ps4';
import XboxOne from './platforms/xboxone';
import NintendoSwitch from './platforms/nintendoswitch';

export default class PlatformsComponent extends React.Component {
  static navigationOptions = {
    title: '1/5 Choisis ta plateforme'
  };
  constructor(){
    super();
    this.state = {
      PcChecked: false,
      Ps4Checked: false,
      XboxOneChecked: false,
      SwitchChecked: false
     }
  }
  _togglePcCheck = () => {
    if (!this.state.Ps4Checked && !this.state.XboxOneChecked && !this.state.SwitchChecked) {
      this.setState({ PcChecked: !this.state.PcChecked})
    }
    else {
    }
  }

  _togglePs4Check = () => {
    if (!this.state.PcChecked && !this.state.XboxOneChecked && !this.state.SwitchChecked) {
      this.setState({ Ps4Checked: !this.state.Ps4Checked})
    }
    else {
    }
  }

  _toggleXboxOneCheck = () => {
    if (!this.state.Ps4Checked && !this.state.PcChecked && !this.state.SwitchChecked) {
      this.setState({ XboxOneChecked: !this.state.XboxOneChecked})
    }
    else {
    }
  }

  _toggleSwitchCheck = () => {
    if (!this.state.Ps4Checked && !this.state.XboxOneChecked && !this.state.PcChecked) {
      this.setState({ SwitchChecked: !this.state.SwitchChecked})
    }
    else {
    }
  }

  //Navigation
  _goToGames = () => this.props.navigation.navigate('Games');
  _goBack = () => this.props.navigation.navigate('Profile');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Grid>
            <Row style={styles.rowgrid}>
              <Col style={ (this.state.Ps4Checked || this.state.XboxOneChecked || this.state.SwitchChecked) ? styles.unchecked : null}>
                <CheckBox checkedColor={'green'} checked={this.state.PcChecked} onPress={this._togglePcCheck} containerStyle={styles.checkbox} right={true}/>
                <Pc _toggleCheck={this._togglePcCheck}/>
              </Col>
              <Col style={ (this.state.PcChecked || this.state.XboxOneChecked || this.state.SwitchChecked) ? styles.unchecked : null}>
                <CheckBox checkedColor={'green'} checked={this.state.Ps4Checked} onPress={this._togglePs4Check} containerStyle={styles.checkbox} right={true}/>
                <Ps4 _toggleCheck={this._togglePs4Check}/>
              </Col>
            </Row>
            <Row style={styles.rowgrid}>
              <Col style={ (this.state.Ps4Checked || this.state.PcChecked || this.state.SwitchChecked) ? styles.unchecked : null}>
                <CheckBox checkedColor={'green'} checked={this.state.XboxOneChecked} onPress={this._toggleXboxOneCheck} containerStyle={styles.checkbox} right={true}/>
                <XboxOne _toggleCheck={this._toggleXboxOneCheck}/>
              </Col>
              <Col style={ (this.state.Ps4Checked || this.state.XboxOneChecked || this.state.PcChecked) ? styles.unchecked : null}>
                <CheckBox checkedColor={'green'} checked={this.state.SwitchChecked} onPress={this._toggleSwitchCheck} containerStyle={styles.checkbox} right={true}/>
                <NintendoSwitch _toggleCheck={this._toggleSwitchCheck}/>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
        <View style={styles.contBtn}>
          <Button
            containerStyle={styles.btnContStyle}
            titleStyle={styles.btnTitle}
            buttonStyle={this.state.Ps4Checked || this.state.XboxOneChecked || this.state.PcChecked || this.state.SwitchChecked ? styles.btnColorGreen : styles.btnColorGrey}
            onPress={this.state.Ps4Checked || this.state.XboxOneChecked || this.state.PcChecked || this.state.SwitchChecked ? this._goToGames : null}
            title='SUIVANT'
          />
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
  colCont: {
    flex: 1
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
  },
  unchecked: {
    opacity: .2
  },
  checkbox: {
    zIndex: 1
  }
})
