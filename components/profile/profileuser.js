import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';

const user = {
  username: 'DatSik34',
  email: 'fhranckeuh@hotmail.com',
  description: 'Joueur vénère de SC2, bon à LoL et CS:GO. J\'aime bien jouer à Dota2 aussi. Bon délire général chaud pour des LAN\'s à Lyon !!',
  phone: '0607762282'
}



export default class ProfileUser extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Divider style={styles.divider}/>
        <View style={styles.profileHeader}>
          <Image/>
          <Text> profile header</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

  },
  profileHeader: {
    backgroundColor: '#25323f',
    alignSelf: "stretch",

  },
  divider: {
    backgroundColor: '#172533',
    height: 2
  }
})
