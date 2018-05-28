import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { Button, Header } from 'react-native-elements';

const stylesHeader = StyleSheet.create({
  logo: {
    width: 55,
    height: 55,
    marginLeft: 5,
    position: 'relative'
  }
})

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
        headerTitle: 'Profil',
        headerRight: (
          <Button onPress={params.logout} title="Log Out"/>
        ),
      };
    };

    componentWillMount() {
      this.props.navigation.setParams({ logout: this._logOut });
    }


  _logOut = () => this.props.navigation.navigate('Auth');
  _goToPlatforms = () => this.props.navigation.navigate('Platforms');
  _goToParticipate = () => this.props.navigation.navigate('Participate');

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>
          Profile Screen
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this._logOut} title='Log Out'/>
          <Button onPress={this._goToPlatforms} title='Organiser'/>
          <Button onPress={this._goToParticipate} title='Participer'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172432',

  },
  buttonContainer: {
    position: 'absolute',
    bottom:0
  },
  header: {
    top:0,
    alignSelf: 'stretch',
    backgroundColor: '#24323E',
    height: 64,
  }
});
