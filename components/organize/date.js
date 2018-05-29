import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class DateComponent extends React.Component {
  static navigationOptions = {
    title: '3/5 Choisis ta date'
  };

  //Navigation
  _goToPlace = () => this.props.navigation.navigate('Place');
  _goBack = () => this.props.navigation.navigate('Games');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.dateContainer}>
          </View>
        </ScrollView>
        <View style={styles.contBtn}>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGreen} titleStyle={styles.btnStyle} onPress={this._goToPlace} title='SUIVANT'/>
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
  dateContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
