import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SummaryComponent extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Récapitulatif',
      headerTitleStyle: {
        flex: 1,
        color: '#ffffff',
        textAlign: 'center',
      },
      headerRight: (
        <Button titleStyle={styles.BtnLogout} containerStyle={{marginRight: 18}} onPress={params.handleScreenShot}  title="SaveImg"/>
      ),
    };
  };

    componentWillMount() {
      this.props.navigation.setParams({ handleScreenShot: this._screenShot });
    }

  _screenShot = () => this.props.navigation.navigate('Summary')

  //Navigation
  _goToProfile = () => this.props.navigation.navigate('Profile');
  _goBack = () => this.props.navigation.navigate('Options');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        </ScrollView>
        <View style={styles.contBtn}>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGreen} titleStyle={styles.btnStyle} onPress={this._goToProfile} title='VALIDER'/>
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
