import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class PlatformFilter extends React.Component {
  constructor(){
    super();
    this.state = { platformSelected: false }
  }

  _isPlatformSelected = () => {
    this.setState({
      platformSelected: !this.state.platformSelected
    })
  }

  render(){
    return(
      <View style={styles.plateformContainer}>
        <View>
          <Text style={styles.namePlateform}>{this.props.name}</Text>
          <Text style={styles.infosPlateform}>Liste des LAN pour {this.props.name}</Text>
        </View>
        <CheckBox
          iconRight
          checked={this.state.platformSelected}
          checkedColor='#008b6b'
          containerStyle={styles.checkboxStyle}
          onPress={this._isPlatformSelected}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  plateformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  namePlateform: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#ffffff',
  },
  infosPlateform: {
    fontFamily: 'Montserrat-Light',
    fontSize: 13,
    color: '#ffffff'
  },
  checkboxStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0
  }
})
