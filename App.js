import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

import RootNavigation from './navigation/rootnavigation';
import filter from './reducers/filter.reducer.js';

 var globalReducers = combineReducers({ filter });
 const store = createStore(globalReducers);

// enlever cette ligne du dessous et décommenter les lignes du dessus pour utiliser reducer
//const store = null;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
