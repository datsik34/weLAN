import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Input, Button, Divider, Icon } from 'react-native-elements';

export default class ProfileEvent extends React.Component {

  constructor(){
    super();
    this.state = { events: []}
  }

  componentDidMount(){
    console.log('Je passe DidMount');
    let array = ['start', 'end'];
    fetch('https://welan-server.herokuapp.com/profile', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: '_id=5b0c1f5e43a3b751bc2d727e'
    })
    .then( response => response.json())
    .then( data => {
      console.log(data);
      if (data.success) {
        data.eventList.map( (e) => {
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
        this.setState({ events: data.eventList })
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentWillUpdate(){
    let array = ['start', 'end'];
    fetch('https://welan-server.herokuapp.com/profile', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: '_id=5b0c1f5e43a3b751bc2d727e'
    })
    .then( response => response.json())
    .then( data => {
      console.log(data);
      if (data.success) {
        data.eventList.map( (e) => {
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
        this.setState({ events: data.eventList })
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    if (this.state.events) {
      var myEventsCard = this.state.events.map( (e, i) => {
        return(
          <View key={i} style={styles.cardEvent}>
            <Text style={styles.cardTitle}>{e.info.event_name}</Text>
            <View style={styles.align}>
              <Icon name='place' color='#008b6b'/>
              <View style={styles.location}>
                <Text style={styles.cardTxt}>{e.location}</Text>
              </View>
            </View>
            <View style={styles.spaceBetween}>
              <View style={styles.align}>
                  <Icon name='date-range' color='#008b6b'/>
                <View>
                  <Text style={styles.cardTxt}>{e.dates.start}</Text>
                  <Text style={styles.cardTxt}>{e.dates.end}</Text>
                </View>
              </View>
              <View style={styles.align}>
                <Icon name='account-box' color='#008b6b'/>
                <Text style={styles.cardTxt}>
                  {e.info.participants.members.length} / {e.info.participants.quantity.max}
                </Text>
              </View>
            </View>
          </View>
        )
      }
    );
      return (
        <View style={styles.cont}>
          <ScrollView horizontal={true}>
            {myEventsCard}
          </ScrollView>
        </View>
      )
    }else {
      return (
        <View>
          <Text>
          Loading
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  cont: {
    marginTop: 10,
    marginRight: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardEvent: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: 'white',
    borderRadius: 4,
    width: 250
  },
  cardTitle: {
    fontFamily: 'Montserrat-regular',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#008b6b',
    marginBottom: 10
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardTxt: {
    fontFamily: 'Teko-Bold',
    fontWeight: 'normal',
    lineHeight: 20,
    color: 'black',
    fontSize: 17
  },
  location: {
    width: '80%',
    marginBottom: 10
  },
  spaceBetween: {
    alignSelf: "stretch",
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
