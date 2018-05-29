import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import { connect } from 'react-redux';

export default class Event extends React.Component {
  render(){
    return(
      <Overlay isVisible={false}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    )
  }
}

// function mapStateToProps(state){
//
// }
// export default connect(mapStateToProps, null)(Event);
