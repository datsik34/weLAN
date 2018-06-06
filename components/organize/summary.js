import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SummaryComponent extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Récapitulatif',
      headerTitleStyle: {
        flex: 1,
        color: '#ffffff',
        textAlign: 'center',
      },
      headerRight: (
        <Button titleStyle={styles.BtnLogout} containerStyle={{marginRight: 18}} onPress={params.handleScreenShot}  title="SaveImg"/>
      ),
    };
  };

    componentWillMount() {
      this.props.navigation.setParams({ handleScreenShot: this._screenShot });
    }

  _screenShot = () => this.props.navigation.navigate('Summary')

  //Navigation
  _goToProfile = () => {
    this.props.navigation.navigate('Profile');
    // fetch('https://welan-server.herokuapp.com/event/organize', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //   body: 'author.id="5b0c1f5e43a3b751bc2d727e"&location="33 rue rené leynaud, 69003 Lyon"&dates.start=1528214400000&&dates.end=1528250400000&info.participants.quantity.max=5'
    // })
    // .then( response => response.json())
    // .then(data => {console.log(data)})
    // .catch(err => {console.log(err)})
    //
    //
    // {
    //   "author": {
    //     "id": "5b0c1f5e43a3b751bc2d727e",
    //     "username": "test",
    //     "email": "test",
    //     "phone": "0812345678"
    //   },
    //   "platforms": "PC",
    //   "games": ["Counter Strike: Global Offensive"],
    //   "dates": {
    //     "start": 1528214400000,
    //     "end": 1528250400000
    //   },
    //   "location": '33 rue rené leynaud, 69003 Lyon',
    //   "info": {
    //     "event_name": "LAN A DELRAY",
    //     "description": "Salut ! Je propose une petite LAN CS:GO chez moi. Ramenez votre matos !",
    //     "participants": {
    //       "quantity": {
    //         "max": 5
    //       }
    //     },
    //     "age": {
    //       "min": 13,
    //       "max": 65
    //     },
    //     "skill": 0,
    //     "smoking": false
    //   }
    // }

  }

  _goBack = () => this.props.navigation.navigate('Options');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerContent}>
            <Text style={styles.titleLan}>LAN A DELRAY</Text>
            <Text style={styles.descLan}>Salut ! Je propose une petite LAN CS:GO chez moi. Ramenez votre matos !</Text>
            <View style={styles.recapLan}>
              <Text style={styles.titleRecapLan}>Récapitulatif</Text>
              <Divider style={styles.dividerRecap} />
              <View style={styles.infosLanContainer}>
                <Icon name='account-box' color='#008b6b' />
                <Text style={styles.infosLan}>33 rue rené leynaud, 69003 Lyon</Text>
              </View>
              <Divider style={styles.dividerRecap} />
              <View style={styles.infosLanContainer}>
                <Icon name='cake' color='#008b6b' />
                <Text style={styles.infosLan}>13 - 30 ans</Text>
              </View>
              <Divider style={styles.dividerRecap} />
              <View style={styles.infosLanContainer}>
                <Icon name='place' color='#008b6b' />
                <Text style={styles.infosLan}>5 Pers. max</Text>
              </View>
              <Divider style={styles.dividerRecap} />
              <View style={styles.infosLanContainer}>
                <Icon name='date-range' color='#008b6b' />
                <Text style={styles.infosLan}>Du 05/06/18 - 18h  au  06/06/18 4h00</Text>
              </View>
              <Divider style={styles.dividerRecap} />
              <View style={styles.infosLanContainer}>
                <Icon name='smoking-rooms' color='#008b6b' />
                <Text style={styles.infosLan}>Non Fumeur</Text>
              </View>
              <Divider style={styles.dividerRecap} />
            </View>
        </View>
        </ScrollView>
        <View style={styles.contBtn}>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGreen} titleStyle={styles.btnStyle} onPress={this._goToProfile} title='VALIDER'/>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGrey} titleStyle={styles.btnStyle} onPress={this._goBack} title='RETOUR'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172533',
  },
  containerContent: {
    padding: 30
  },
  titleLan: {
    fontFamily: 'Montserrat-Bold',
    fontSize:20,
    color: '#008b6b',
    marginTop: -8,
  },
  descLan: {
    fontFamily: 'Montserrat-Light',
    color: '#ffffff'
  },
  recapLan: {
    marginTop: 30
  },
  titleRecapLan: {
    paddingBottom: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#ffffff'
  },
  infosLanContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  infosLan: {
    marginLeft: 10,
    fontFamily: 'Teko-Light',
    fontSize: 18,
    color: '#ffffff'
  },
  dividerRecap: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 1
  },
  btnStyle: {
    color: '#172533',
    fontFamily: 'Montserrat-regular',
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnColorGreen: {
    backgroundColor: '#00b14c',
    borderRadius: 0
  },
  btnColorGrey: {
    backgroundColor: '#606060',
    borderRadius: 0
  },
  contBtn: {
    flexDirection: 'row-reverse',
    alignSelf: "stretch",
    justifyContent: 'space-between',
  },
  btnContStyle: {
    width: '50%'
  }
})
