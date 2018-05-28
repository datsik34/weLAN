import React from 'React';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';


export default class LanCard extends React.Component {

  render() {
    return(
      <View style={Styles.cardContainer}>

        <View style={Styles.imgLanContainer}>
          <Image style={Styles.imgLan}source={require('../../assets/images/games/wallpaper/test.jpg')}/>
        </View>


        <View style={Styles.descContainer}>
          <Text style={Styles.authorLan}>PSEUDOUSER ORGANISE LA LAN </Text>
          <Text style={Styles.titleLan}>Nom de la Lan</Text>
          <Text style={Styles.descLan}>Description de la lan. Lorem ipsum dolor sit amet, dolor sit amet ...</Text>

          <View style={Styles.moreInfosLanContainer}>
            <Icon name='account-box' color='#008b6b' iconStyle={{fontSize: 16}} />
            <Text style={Styles.moreInfosLan}>6 PERS. MAX</Text>
          </View>

          <View style={Styles.moreInfosLanContainer}>
            <Icon name='date-range' color='#008b6b' iconStyle={{fontSize: 16}} />
            <Text style={Styles.moreInfosLan}>12.06.18  -  15H / 17H</Text>
          </View>
        </View>

      </View>
    )
  }

};


const Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    width: 250,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    padding: 1
  },
  imgLanContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  imgLan: {
    width: 248,
    height: 120,
  },
  descContainer: {
    padding: 9
  },
  authorLan: {
    fontFamily: 'Teko-Bold',
    fontSize: 12
  },
  titleLan: {
    fontFamily: 'Montserrat-Bold',
    fontSize:20,
    color: '#008b6b',
    marginTop: -10,
  },
  descLan: {
    marginBottom: 10,
    fontFamily: 'Montserrat-Light',
    fontSize: 10,
  },
  moreInfosLanContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreInfosLan: {
    marginLeft: 5,
    fontFamily: 'Teko-Light',
    fontSize: 14,
  }
});
