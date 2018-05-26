import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home.js';

export default class App extends React.Component {
  render() {
    return (
    <Home/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
