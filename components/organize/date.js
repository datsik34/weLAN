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
      limitDate: null,
    }
  }

  //Start DateTimePicker functions
  _showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });
  _hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });
  _handleStartDatePicked = (date) => {
    this.setState({limitDate: date})
    let formatedDate = date.toLocaleDateString();
    let formatedTime = ((date.getHours()<10?'0':'') + date.getHours() + " : " + (date.getMinutes()<10?'0':'') + date.getMinutes());
    this.setState({ startDate: formatedDate, startTime: formatedTime})
    this._hideStartDateTimePicker();
  };

  //End DateTimePicker functions
  _showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });
  _hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });
  _handleEndDatePicked = (date) => {
    let formatedDate = date.toLocaleDateString();
    let formatedTime = ((date.getHours()<10?'0':'') + date.getHours() + " : " + (date.getMinutes()<10?'0':'') + date.getMinutes());
    this.setState({ endDate: formatedDate, endTime: formatedTime})
    this._hideEndDateTimePicker();
  };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerStartDate}>
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
        <View style={styles.containerEndDate}>
          <View style={styles.contText}>
            <Text style={styles.text}>
              Au ...
            </Text>
          </View>
            <TouchableOpacity style={this.state.startDate ? styles.contDate : styles.contDateUnpicked} onPress={this.state.startDate ? this._showEndDateTimePicker : null}>
              {renderIf(!this.state.endDate, <Text style={this.state.startDate ? styles.dateText : styles.dateTextUnpicked}>Choisis ta date</Text>)}
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
            cancelTextIOS='Annuler'
            confirmTextIOS='Confirmer'
          />
          <DateTimePicker
            isVisible={this.state.isEndDateTimePickerVisible}
            onConfirm={this._handleEndDatePicked}
            onCancel={this._hideEndDateTimePicker}
            mode='datetime'
            datePickerModeAndroid='spinner'
            cancelTextIOS='Annuler'
            confirmTextIOS='Confirmer'
            minimumDate={this.state.startTime != null ? this.state.limitDate : undefined}
          />
        <View style={styles.contBtn}>
          <Button
            title='SUIVANT'
            titleStyle={styles.btnStyle}
            containerStyle={styles.btnContStyle}
            buttonStyle={this.state.endDate != null ? styles.btnColorGreen : styles.btnColorGrey}
            onPress={this.state.endDate != null ? this._goToPlace : null}
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
  containerStartDate: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEndDate: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70
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
  dateTextUnpicked: {
    fontSize: 60,
    fontWeight: 'normal',
    fontFamily: 'Teko-Light',
    color: '#003b1b',
    textAlign: 'center'
  },
  contDate: {
    width: '90%',
    height: '50%',
    borderRadius: 3,
    borderColor: '#00b14c',
    borderWidth: 1,
    justifyContent: 'center'
  },
  contDateUnpicked: {
    width: '90%',
    height: '50%',
    borderRadius: 3,
    borderColor: '#003b1b',
    borderWidth: 1,
    justifyContent: 'center'
  }
})
