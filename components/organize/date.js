import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

function renderIf(condition, content) {
  if (condition) {
    return content;
  }else {
    return null;
  }
}

export default class DateComponent extends React.Component {

  static navigationOptions = {
    title: '3/5 Choisis ta date'
  };
  //Navigation
  _goToPlace = () => this.props.navigation.navigate('Place');
  _goBack = () => this.props.navigation.navigate('Games');

  constructor(){
    super();
    this.state = {
      startDate: null,
      endDate: null,
      startTime: null,
      EndTime: null,
      isStartDateTimePickerVisible: false,
      isEndDateTimePickerVisible: false,
    }
  }
  //Start DateTimePicker
  _showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });
  _hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });
  _handleStartDatePicked = (date) => {
    let formatedDate = date.toLocaleDateString()
    let formatedTime = (date.getHours() + " : " + date.getMinutes());
    this.setState({ startDate: formatedDate, startTime: formatedTime})
    this._hideStartDateTimePicker();
  };

  //End DateTimePicker
  _showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });
  _hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });
  _handleEndDatePicked = (date) => {

    let formatedDate = date.toLocaleDateString()
    let formatedTime = (date.getHours() + " : " + date.getMinutes());
    this.setState({ endDate: formatedDate, endTime: formatedTime})
    this._hideEndDateTimePicker();
  };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerDate}>
          <View style={styles.contText}>
            <Text style={styles.text}>
              Du ...
            </Text>
          </View>
          <TouchableOpacity style={styles.contDate} onPress={this._showStartDateTimePicker}>
              {renderIf(!this.state.startDate, <Text style={styles.dateText}>Choisis ta date</Text>)}
              {renderIf(this.state.startDate,
                <View>
                  <Text style={styles.dateText}>{this.state.startDate}</Text>
                  <Text style={styles.dateText}>{this.state.startTime}</Text>
                </View>)
              }
          </TouchableOpacity>
        </View>
        <View style={styles.containerDate}>
          <View style={styles.contText}>
            <Text style={styles.text}>
              Au ...
            </Text>
          </View>
            <TouchableOpacity style={styles.contDate} onPress={this._showEndDateTimePicker}>
              {renderIf(!this.state.endDate, <Text style={styles.dateText}>Choisis ta date</Text>)}
              {renderIf(this.state.endDate,
                <View>
                  <Text style={styles.dateText}>{this.state.endDate}</Text>
                  <Text style={styles.dateText}>{this.state.endTime}</Text>
                </View>)
              }
            </TouchableOpacity>
        </View>
          <DateTimePicker
            isVisible={this.state.isStartDateTimePickerVisible}
            onConfirm={this._handleStartDatePicked}
            onCancel={this._hideStartDateTimePicker}
            mode='datetime'
            datePickerModeAndroid='spinner'
          />
          <DateTimePicker
            isVisible={this.state.isEndDateTimePickerVisible}
            onConfirm={this._handleEndDatePicked}
            onCancel={this._hideEndDateTimePicker}
            mode='datetime'
            datePickerModeAndroid='spinner'
          />
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
  containerDate: {
    flex: 0.5,
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
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row-reverse',
    alignSelf: "stretch",
    justifyContent: 'space-between',
  },
  btnContStyle: {
    width: '50%'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-regular',
    color: 'white',
  },
  contText: {
    position: 'absolute',
    left: 20,
    top: 20
  },
  dateText: {
    fontSize: 60,
    fontWeight: 'normal',
    fontFamily: 'Teko-Light',
    color: '#00b14c',
    textAlign: 'center'
  },
  contDate: {
    width: '95%',
    height: '50%',
    borderRadius: 3,
    borderColor: '#00b14c',
    borderWidth: 1,
    justifyContent: 'center'
  }
})
