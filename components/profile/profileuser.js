import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';

import ProfileEvent from './profileevent.js';

const user = {
  username: 'DatSik34',
  firstname: 'Franck',
  lastname: 'Martigne',
  description: 'Joueur vénère de SC2, bon à LoL et CS:GO. J\'aime bien jouer à Dota2 aussi. Bon délire général chaud pour des LAN\'s sur Lyon !! A+ sous l\'bus mdrr',
  phone: '0607762282'
}

let initials = (user.firstname[0] + user.lastname[0]).toUpperCase();

export default class ProfileUser extends React.Component {

  _uploadProfilePicture = () => console.log('click avatar');

  render() {
    return (
      <ScrollView style={styles.container}>
        <Divider style={styles.divider}/>
        <View style={styles.containerRow}>
          <TouchableOpacity style={styles.avatar} onPress={this._uploadProfilePicture}>
            <View style={styles.initialsContainer}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileTitle}>{user.username}</Text>
        </View>
        <Divider style={styles.divider}/>
        <View style={styles.containerRow}>
          <Text style={styles.rowTitle}>Bio</Text>
        </View>
        <Text style={styles.profileBioText}>{user.description}</Text>
        <View style={styles.containerRow}>
          <Text style={styles.rowTitle}>Téléphone</Text>
        </View>
        <Text style={styles.profileBioPhone}>{user.phone}</Text>
        <View style={styles.containerRow}>
          <Text style={styles.rowTitle}>Mes événements</Text>
        </View>
        <ProfileEvent/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerRow: {
    flex: 1,
    backgroundColor: '#25323f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  divider: {
    backgroundColor: '#172533',
    height: 2
  },
  avatar: {
    marginLeft: '7%',
    backgroundColor: '#00b14c',
    aspectRatio: 1,
    borderRadius: 150,
    flex: 0.30,
  },
  initialsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  avatarText: {
    color: '#172533',
    fontWeight: 'normal',
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    marginBottom: 2
  },
  profileTitle: {
    marginLeft: '13%',
    fontWeight: 'normal',
    fontFamily: 'Montserrat-regular',
    fontSize: 28,
    color: 'white'
  },
  rowTitle: {
    marginLeft: '5%',
    fontWeight: 'normal',
    fontFamily: 'Montserrat-regular',
    fontSize: 20,
    color: 'white'
  },
  profileBioText: {
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
    fontWeight: 'normal',
    fontFamily: 'Montserrat-regular',
    fontSize: 13,
    color: 'white'
  },
  profileBioPhone: {
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '6%',
    fontWeight: 'normal',
    fontFamily: 'Montserrat-regular',
    fontSize: 18,
    color: 'white'
  }
})
