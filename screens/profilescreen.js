import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { Button, Header } from 'react-native-elements';


export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      return {
        headerTitle: 'Profil',
        headerTitleStyle: {
          flex: 1,
          color: '#ffffff',
          textAlign: 'center',
          fontFamily: 'Montserrat-Bold',
          fontWeight: 'normal'
        },
        headerRight: (
          <Button titleStyle={styles.btnLogoutTitle} containerStyle={styles.btnLogoutCont} onPress={params.logout} clear={true} title="Log Out"/>
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
          <Button buttonStyle={styles.btnColor} titleStyle={styles.btnTitle} onPress={this._goToPlatforms} title='ORGANISER'/>
          <Button buttonStyle={styles.btnColor} titleStyle={styles.btnTitle} onPress={this._goToParticipate} title='PARTICIPER'/>
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
    backgroundColor: '#172533',
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
  },
  btnLogoutTitle: {
    color: '#e05504',
    fontFamily: 'Montserrat-regular',
    fontWeight: 'normal',
    fontSize: 16
  },
  btnLogoutCont: {
    marginRight: 18
  },
  btnTitle: {
    color: '#172533',
    fontFamily: 'Montserrat-regular',
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnColor: {
    backgroundColor: '#00b14c',
    width: 230,
    marginBottom: 6
  }

});
