import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { MapView } from 'expo';

export default class PlaceComponent extends React.Component {
  static navigationOptions = {
    title: '4/5 Choisis ton lieu'
  };

  //Navigation
  _goToOptions = () => this.props.navigation.navigate('Options');
  _goBack = () => this.props.navigation.navigate('Date');

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.mapContainer}>


          <MapView
            provider='google'
            style={styles.map}
            region={{
              latitude: 45.7583991,
              longitude: 4.8302986,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={[
              { "elementType": "geometry", "stylers": [{"color": "#242f3e"}] },
              { "elementType": "labels.text.fill", "stylers": [{ "color": "#128a6b" }]},
              { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }]},
              { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "visibility": "off"}]},
              { "featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
              { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#128a6b" }]},
              { "featureType": "poi","stylers": [{ "visibility": "off" }]},
              { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }]},
              { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }]},
              { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }]},
              { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }]},
              { "featureType": "road", "elementType": "geometry.stroke","stylers": [{ "color": "#212a37" }]},
              { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]},
              { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }]},
              { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#807f81" }]},
              { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }]},
              { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f2f0f3" }]},
              { "featureType": "road.local", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
              { "featureType": "transit", "stylers": [{ "visibility": "off" }]},
              { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }]},
              { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }]},
              { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }]},
              { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }]},
              { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#17263c" }]}
            ]}
          ></MapView>

          <View style={{ position: 'absolute', top: 40, left: 30, right:0 }}>
            <Input
              placeholder='Entrez une adresse'
              placeholderTextColor='#172533'
              leftIcon={<Icon name='search' size={15} color='#172533' />}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
            />
          </View>
        </View>

        <View style={styles.contBtn}>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGreen} titleStyle={styles.btnStyle} onPress={this._goToOptions} title='SUIVANT'/>
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
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%'
  },
  input: {
    fontSize: 14,
    fontFamily:'Montserrat-Light',
    color: '#172533'
  },
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1,
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
