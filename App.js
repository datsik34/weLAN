import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
import {Font} from 'expo';

import RootNavigation from './navigation/rootnavigation';
import filter from './reducers/filter.reducer.js';

 var globalReducers = combineReducers({ filter });
 const store = createStore(globalReducers);

// enlever cette ligne du dessous et décommenter les lignes du dessus pour utiliser reducer
//const store = null;

export default class App extends React.Component {

  componentDidMount() {
      Font.loadAsync({
        'Teko-Light': require('./assets/fonts/Teko-Light.ttf'),
        'Teko-Bold': require('./assets/fonts/Teko-Bold.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      });
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    );
  }
}
