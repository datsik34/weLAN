import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';


class Filter extends React.Component {

  render(){

    if(this.props.filter){
      return(
        <View style={Styles.filterContainer}>
          <View style={Styles.headerFilter}>
            <Icon
              name='close'
              size={30}
              color='#ffffff'
              onPress={this.props.onCloseFilterClick}
            />
          </View>
        </View>)
    } else {
      return(<View></View>)
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


const Styles = StyleSheet.create({
  filterContainer: {
    zIndex: 2,
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.8)',
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    padding: 20
  },
  headerFilter: {
    flexDirection: 'row'
  }
})
