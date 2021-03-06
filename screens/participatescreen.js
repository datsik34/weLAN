import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Avatar, Icon, Overlay } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import LanCard from './../components/participate/lanCard.js';
import Filter from './../components/participate/filter.js';
import Event from './../components/participate/event.js';

class ParticipateScreen extends React.Component {
  constructor(){
    super();
    this.state = {filterIsVisible: false}
  }

  static navigationOptions = {
    header: null
  }

  _goBack = () => this.props.navigation.navigate('Profile');

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.mapContainer}>
            <MapView
              provider='google'
              style={styles.map}
              region={MapRegion}
              customMapStyle={GoogleMapsStyle}
            />
            <View style={styles.hearderMapContainer}>
              <Image style={styles.logo} source={require('../assets/images/resources/logo.svg.png')}/>
              <Avatar size="medium" rounded title="MT" onPress={this._goBack} containerStyle={styles.avatarUser}/>
            </View>
            <View style={styles.btnFilterContainer}>
              <Button
                title='Filtres'
                buttonStyle={styles.btnFilterStyle}
                titleStyle={styles.btnFilterTitleStyle}
                iconRight
                icon={<Icon name='search' size={15} color='#172533'/>}
                onPress={this.props.onOpenFilterClick}
              />
            </View>
          </View>
        <View style={styles.lanListContainer}>
          <LanCard/>
        </View>
        <Event/>
        <Filter/>
      </View>
    );
  }
}

mapDispatshToProps = (dispatch) => {
  return {
    onOpenFilterClick: () => { dispatch({type: 'openFilter'})}
  }
}

export default connect(null, mapDispatshToProps)(ParticipateScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 0.65,
  },
  hearderMapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 27,
    left: 5,
    right: 10,
    height: 64
  },
  logo: {
    width: 55,
    height: 55,
  },
  avatarUser:{
    backgroundColor: '#0ac161',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  map: {
    flex: 1,
  },
  btnFilterContainer: {
    zIndex:1,
    flexDirection: 'row',
    position:'absolute',
    bottom: 20,
    left:0,
    right: 0,
    justifyContent: 'center',
  },
  lanListContainer: {
    flex: 0.35,
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#172533',
  },
  btnFilterStyle: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 50
  },
  btnFilterTitleStyle: {
    color:'#172533',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold'
  }
});

const MapRegion = {
  latitude: 45.7583991,
  longitude: 4.8302986,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
const GoogleMapsStyle = [
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
]
