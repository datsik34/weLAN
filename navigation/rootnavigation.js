import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

//import des screens
import HomeScreen from '../screens/homescreen.js';
import ProfileScreen from '../screens/profilescreen.js';
import ParticipateScreen from '../screens/participatescreen.js';

//import des composants afin de les stacker dans un navigateur
import PlatformsComponent from '../components/organize/platforms';
import GamesComponent from '../components/organize/games';
import DateComponent from '../components/organize/date';
import PlaceComponent from '../components/organize/place';
import OptionsComponent from '../components/organize/options';
import SummaryComponent from '../components/organize/summary';

//style du header de l'app (doit rester en haut)
const stylesHeader = StyleSheet.create({
  logo: {
    width: 55,
    height: 55,
    marginLeft: 5,
    position: 'relative'
  }
})
//Déclaration de l'arborescence des écrans de l'app. HomeScreen est indépendant
const AppStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Participate: ParticipateScreen,
    Platforms: PlatformsComponent,
    Games: GamesComponent,
    Date: DateComponent,
    Place: PlaceComponent,
    Options: OptionsComponent,
    Summary: SummaryComponent
  },
  {

    initialRouteName: 'Profile',
    //Customization du header de l'app sur tous les écrans de AppStack
    navigationOptions: {
      headerLeft: (<Image source={require('../assets/images/resources/logo.svg.png')} style={stylesHeader.logo}/>),
      headerStyle: {
        backgroundColor: '#25323f',
        height: 64
      },
      headerTitleStyle: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'normal'
      }
    }
  }
);
//la partie login/signup est dissociée du reste de l'App.
//Le switch sert ici à jetter l'écran HomeScreen une fois la connexion faite, et non à stacker comme le fait StackNavigator
//Target initiale au lancement de l'app : Auth donc HomeScreen
const AuthStack = createStackNavigator({Home: HomeScreen});

// AppSwitch contient le Navigator Auth (home) et App (le reste de l'app). Le chemin par défaut est Auth
const AppSwitch = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

//RootNavigation (qui est appelé dans App.js) renvoie AppSwitch, donc Auth qui est la route par défaut.
export default class RootNavigation extends React.Component {
  render(){
    return (
    <AppSwitch/>
    )
  }
}
