import React from 'React';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

let event = [];

class LanCard extends React.Component {

  constructor(){
    super();
    this.state = { event: [] }
  }

  componentDidMount(){
    let array = ['start', 'end'];

    fetch('https://welan-server.herokuapp.com/event/locate')
    .then( response => response.json() )
    .then ( data => {
      // Début - Change le format des dates
      data.availableEvent.map( (e, i) => {
        let elements = {
          start: null,
          end: null
        }
        for (let el of array) {
          elements[el] = JSON.stringify(e.dates[el]).slice(1, -1).split(/"|-|T|:/);
          elements[el] = `${elements[el][2]}.${elements[el][1]}.${elements[el][0]} - ${elements[el][3]}h${elements[el][4]}`;
        }
        e.dates = elements;
      })
      // fin

      this.setState({ event: data })
    });
  }

  render() {

      if( this.state.event.availableEvent ){
      event = this.state.event.availableEvent;

        var eventCard = this.state.event.availableEvent.map((e, i) => {
          return(
            <TouchableOpacity key={i} style={Styles.cardContainer} onPress={(indice) => this.props.onClickOpenEvent(i)}>
              <View style={Styles.imgLanContainer}>
                <Image style={Styles.imgLan} source={require('../../assets/images/games/wallpaper/test.jpg')}/>
              </View>
              <View style={Styles.descContainer}>
                <Text style={Styles.authorLan}>{e.author.username} ORGANISE LA LAN </Text>
                <Text style={Styles.titleLan}>{e.info.event_name}</Text>
                <Text style={Styles.descLan}>{e.info.description}</Text>
                <View style={Styles.moreInfosLanContainer}>
                  <Icon name='account-box' color='#008b6b' iconStyle={{fontSize: 16}}/>
                  <Text style={Styles.moreInfosLan}>{e.info.participants.quantity.max} PERS. MAX</Text>
                </View>
                <View style={Styles.moreInfosLanContainer}>
                  <Icon name='date-range' color='#008b6b' iconStyle={{fontSize: 16}}/>
                  <Text style={Styles.moreInfosLan}>{e.dates.start}  /  {e.dates.end}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
      );
    }

    return(
    <ScrollView horizontal={true}>
      <View style={Styles.listCardContainer}>
        {eventCard}
      </View>
    </ScrollView>
    )
  }
};


function mapDispatchToProps(dispatch){
  return{
    onClickOpenEvent: function(indice){
      dispatch({
        type: 'openEventPopup',
        idLan: event[indice]._id,
        titleLan: event[indice].info.event_name,
        author: event[indice].author.username,
        description: event[indice].info.description,
        maxPeople: event[indice].info.participants.quantity.max,
        startDate: event[indice].dates.start,
        endDate: event[indice].dates.end,
        address: event[indice].location,
        minAge: event[indice].info.age.min,
        maxAge: event[indice].info.age.max,
        smoker: event[indice].info.smoking
     })
    }
  }
}
export default connect(null, mapDispatchToProps)(LanCard);


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
    borderRadius: 5
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
