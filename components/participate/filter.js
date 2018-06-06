import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button, Icon, CheckBox, Divider, Badge } from 'react-native-elements';
import { connect } from 'react-redux';

import PlatformFilter from './plateformfilter.js';
import GameFilter from './gamefilter.js';

const platformList = ['PC', 'PS4', 'XBOX ONE', 'SWITCH'];
const gameList = ['Fortnite', 'GS GO', 'Hearthstone', 'Starcraft', 'Owerwatch', 'LOL'];

class Filter extends React.Component {
  render(){

    var plateformChoice = platformList.map((p, i) =>
      <PlatformFilter key={i} name={p}/>
    );

    var gameChoice = gameList.map((g, i) =>
      <GameFilter key={i} title={g}/>
    );

    if(this.props.filter){
      return(
        <View style={styles.filterContainer}>
          <View style={styles.headerFilter}>
            <Icon name='close' size={30} color='#ffffff' onPress={this.props.onCloseFilterClick}/>
            <Text style={styles.CleanFilter}>Effacer</Text>
          </View>
          <ScrollView>
            <View>
              <Text style={styles.titlePart}>Quelle Plateforme ?</Text>
                {plateformChoice}
              <Divider style={styles.divider} />
              <Text style={styles.titlePart}>Quel jeu ?</Text>
              <View style={styles.badgeContainer}>
                {gameChoice}
              </View>
              <Divider style={styles.divider} />
            </View>
          </ScrollView>
        </View>
      )
    } else {
      return(null)
    }
  }
}

function mapDispatshToProps(dispatch){
  return{
    onCloseFilterClick: function(){
      dispatch( {type: 'closeFilter'} );
    }
  }
};

function mapStateToProps(state){
  return{
    filter: state.filter
  }
};

export default connect(mapStateToProps, mapDispatshToProps)(Filter);

const styles = StyleSheet.create({
  filterContainer: {
    zIndex: 2,
    flex: 1,
    backgroundColor:'rgba(24,38,51,0.95)',
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    padding: 20
  },
  headerFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  CleanFilter: {
    fontFamily:'Montserrat-Light',
    fontSize: 18,
    color: '#ffffff'
  },
  titlePart: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 19,
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 30
  },
  divider: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 1
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 30,
  }
})
