import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers }  from 'redux';
import { Font } from 'expo';

// N A V I G A T I O N
import RootNavigation from './navigation/rootnavigation';

// R E D U C E R S
import { reducer as formReducer } from 'redux-form';
import filter from './reducers/filter.reducer.js';
import eventModal from './reducers/eventmodal.reducer.js';
import log from './reducers/log.reducer.js';
var globalReducers = combineReducers({ filter, eventModal, form: formReducer , log});
const store = createStore(globalReducers);

export default class App extends React.Component {
  componentDidMount(){
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
