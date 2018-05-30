import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Input, Button, Divider, Icon } from 'react-native-elements';

let events = [
  {
    info: {
      event_name: 'LAN LoL ce Weekend!',
      participants: {
        quantity: {
          current: 3,
          max: 5
        }
      }
    },
    location: '124 rue de la République, 69001 Lyon',
    dates: {
      start: '12-06-18 - 18h00',
      end: '14-06-18 - 12h00',
    }
  },
  {
    info: {
      event_name: 'CS:GO/Dota2',
      participants: {
        quantity: {
          current: 2,
          max: 10
        }
      }
    },
    location: '40 rue Charlemagne, 69003 Lyon',
    dates: {
      start: '15-06-18 - 20h00',
      end: '16-06-18 - 20h00',
    }
  }
]

export default class ProfileEvent extends React.Component {
  render() {
    var myEventsCard = events.map( (e, i) => {
      return(
        <View key={i} style={styles.cardEvent}>
          <Text style={styles.cardTitle}>{e.info.event_name}</Text>
          <View style={styles.align}>
            <Icon name='place' color='#008b6b'/>
            <View>
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
                {e.info.participants.quantity.current} / {e.info.participants.quantity.max}
              </Text>
            </View>
          </View>
        </View>
      )
    }
  );
    return (
      <View style={styles.cont1}>
        <ScrollView horizontal={true}>
          {myEventsCard}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cont1: {
    // backgroundColor: 'red'
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
  spaceBetween: {
    alignSelf: "stretch",
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
