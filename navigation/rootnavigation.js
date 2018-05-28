import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

//import des screens
import HomeScreen from '../screens/homescreen.js';
import ProfileScreen from '../screens/profilescreen.js';
// import OrganizeScreen from '../screens/organizescreen.js';
import ParticipateScreen from '../screens/participatescreen.js';

//import des composants afin de les stacker dans un navigateur
import PlatformsComponent from '../components/organize/platforms';
import GamesComponent from '../components/organize/games';
import DateComponent from '../components/organize/date';
import PlaceComponent from '../components/organize/place';
import OptionsComponent from '../components/organize/options';
import SummaryComponent from '../components/organize/summary';

//Arborescence Organize
const OrganizeStack = createStackNavigator(
  {
    Platforms: PlatformsComponent,
    Games: GamesComponent,
    Date: DateComponent,
    Place: PlaceComponent,
    Options: OptionsComponent,
    Summary: SummaryComponent
  },
  {
    initialRouteName: 'Platforms',
    navigationOptions: {
      header: null
    },
  }
);

//Déclaration de l'arborescence des écrans de l'app. HomeScreen est indépendant
const AppStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Organize: OrganizeStack,
    Participate: ParticipateScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
//la partie login/signup est dissociée du reste de l'App.
//Le switch sert ici à jetter l'écran HomeScreen une fois la connexion faite, et non à stacker comme le fait StackNavigator
//Target initiale au lancement de l'app : Auth
const AuthStack = createStackNavigator({Home: HomeScreen});


const AppSwitch = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default class RootNavigation extends React.Component {
  render(){
    return (
    <AppSwitch/>
    )
  }
}
