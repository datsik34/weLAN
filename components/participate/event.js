import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Overlay, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class Event extends React.Component {
  render(){

    return(
      <Overlay isVisible={this.props.eventIsSelected}>
        <Icon
          name='close'
          size={30}
          color='black'
          onPress={this.props.onCloseEventClick}
        />
        <Text>Hello from Overlay!</Text>
      </Overlay>
    )
  }
}

function mapDispatshToProps(dispatch){
  return{
    onCloseEventClick: function(){
      dispatch( {type: 'closeEventPopup'} );
    }
  }
};

function mapStateToProps(state){
  return{
    eventIsSelected: state.eventModal.eventIsSelected,
    titleLan: state.eventModal.titleLan,
    author: state.eventModal.author,
    description: state.eventModal.description,
    maxPeople: state.eventModal.maxPeople,
    date: state.eventModal.date
  }
};

export default connect(mapStateToProps, mapDispatshToProps)(Event);
