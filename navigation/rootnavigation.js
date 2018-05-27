import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

//import des screens
import HomeScreen from '../screens/homescreen.js';
import ProfileScreen from '../screens/profilescreen.js';
import OrganizeScreen from '../screens/organizescreen.js';
import ParticipateScreen from '../screens/participatescreen.js';

//Déclaration de l'arborescence des écrans de l'app. HomeScreen est indépendant
const AppStack = StackNavigator({
  Profile: ProfileScreen,
  Organize: OrganizeScreen,
  Participate: ParticipateScreen
});
//la partie login/signup est dissociée du reste de l'App.
//Le switch sert ici à jetter l'écran HomeScreen une fois la connexion faite, et non à stacker comme le fait StackNavigator
//Target initiale au lancement de l'app : Auth
const AuthStack = StackNavigator({Home: HomeScreen});

const AppSwitch = SwitchNavigator(
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
