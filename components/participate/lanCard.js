import React from 'React';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

const event = [
  {
    author: 'Truc',
    titleLan: 'Nom de la lan',
    description: 'Description de la lan. Lorem ipsum dolor sit amet, dolor sit amet ...',
    maxPeople: 6,
    date: '12.06.18  -  15H / 17H'
  },
  {
    author: 'Bidule',
    titleLan: 'Nom de la lan 2',
    description: 'Description de la lan. Lorem ipsum dolor sit amet, dolor sit amet ...',
    maxPeople: 4,
    date: '12.06.18  -  15H / 17H'
  }
];

class LanCard extends React.Component {

  render() {


    var eventCard = event.map( (e, i) => {
      return(
        <TouchableOpacity key={i} style={Styles.cardContainer} onPress={(titleLan) => this.props.onClickCard(e.titleLan)}>

          <View style={Styles.imgLanContainer}>
            <Image style={Styles.imgLan}source={require('../../assets/images/games/wallpaper/test.jpg')}/>
          </View>


          <View style={Styles.descContainer}>
            <Text style={Styles.authorLan}>{e.author} ORGANISE LA LAN </Text>
            <Text style={Styles.titleLan}>{e.titleLan}</Text>
            <Text style={Styles.descLan}>{e.description}</Text>

            <View style={Styles.moreInfosLanContainer}>
              <Icon name='account-box' color='#008b6b' iconStyle={{fontSize: 16}} />
              <Text style={Styles.moreInfosLan}>{e.maxPeople} PERS. MAX</Text>
            </View>

            <View style={Styles.moreInfosLanContainer}>
              <Icon name='date-range' color='#008b6b' iconStyle={{fontSize: 16}} />
              <Text style={Styles.moreInfosLan}>{e.date}</Text>
            </View>
          </View>

        </TouchableOpacity>
      )
    });


    return(
    <ScrollView horizontal={true}>
      <View style={Styles.listCardContainer} >
        {eventCard}
      </View>
    </ScrollView>
    )
  }

};


function mapDispatshToProps(dispatch){
  return{
    onClickCard: function(titleLan){
      dispatch({
        type: 'viewEvent',
        titleLan: titleLan
     })
    }
  }
}
export default connect(null, mapDispatshToProps)(LanCard);



const Styles = StyleSheet.create({
  listCardContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    width: 250,
    marginRight: 10,
    marginLeft: 10,
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
