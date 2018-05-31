import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button, Input, Slider, CheckBox } from 'react-native-elements';

export default class OptionsComponent extends React.Component {
  static navigationOptions = {
    title: '5/5 Finalise avec tes options'
  };

  constructor(){
    super();
    this.state = { smoke: false }
  }

  _smokeIsAllowed = () => {
    this.setState({
      smoke: !this.state.smoke
    })
  }

  //Navigation
  _goToSummary = () => this.props.navigation.navigate('Summary');
  _goBack = () => this.props.navigation.navigate('Place');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={{ padding: 20 }}>

            <Text style={styles.title}>NOM DE LA LAN</Text>
            <Input
              placeholder='Entre le nom de ta LAN'
              inputContainerStyle={{ backgroundColor:'#25323f', borderColor: '#25323f', borderRadius: 5 }}
              inputStyle={{ color:'#ffffff', fontSize: 16 }}
              containerStyle={{width:'100%'}}
            />

            <Text style={styles.title}>DESCRIPTION</Text>
            <TextInput
              placeholder='Entre une description de ta LAN'
              multiline={true}
              numberOfLines={100}
              underlineColorAndroid='rgba(0,0,0,0)'
              style={styles.txtInputDesc}
            />

            <Text style={styles.title}>NOMBRE DE PARTICIPANTS :</Text>
            <TextInput
              placeholder='0'
              keyboardType='numeric'
              keyboardAppearance='dark'
              underlineColorAndroid='rgba(0,0,0,0)'
              style={styles.txtInputNbParticipant}
            />

            <Text style={styles.title}>TRANCHE D'AGE :</Text>
            <View style={styles.ageContainer}>
              <View style={styles.ageMinContainer}>
                <Text style={styles.ageTitle}>Age min</Text>
                <Input
                  placeholder='13'
                  keyboardType='numeric'
                  inputContainerStyle={{ backgroundColor:'#25323f', borderColor: '#25323f', borderRadius: 5 }}
                  inputStyle={{ color:'#ffffff', fontSize: 16 }}
                  containerStyle={{width:40}}
                />
              </View>
              <View style={styles.ageMaxContainer}>
                <Text style={styles.ageTitle}>Age max</Text>
                <Input
                  placeholder='30'
                  keyboardType='numeric'
                  inputContainerStyle={{ backgroundColor:'#25323f', borderColor: '#25323f', borderRadius: 5 }}
                  inputStyle={{ color:'#ffffff', fontSize: 16 }}
                  containerStyle={{width:40, padding: 0, margin: 0}}
                />
              </View>
            </View>

            <Text style={styles.title}>TRANCHE D'AGE :</Text>
            <CheckBox
              iconRight
              title='Fumeurs'
              checked={this.state.smoke}
              checkedColor='#008b6b'
              containerStyle={{backgroundColor: 'transparent', borderWidth: 0, padding: 0}}
              onPress={this._smokeIsAllowed}
            />

          </View>
        </ScrollView>

        <View style={styles.contBtn}>
          <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColorGreen} titleStyle={styles.btnStyle} onPress={this._goToSummary} title='SUIVANT'/>
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
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 10
  },
  txtInputDesc: {
    width:'100%',
    textAlignVertical: 'top',
    fontSize: 16,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:15,
    paddingBottom:15,
    color:'#ffffff',
    height: 100,
    backgroundColor:'#25323f',
    borderColor: '#25323f',
    borderRadius: 5
  },
  txtInputNbParticipant: {
    width:'100%',
    textAlignVertical: 'top',
    fontSize: 16,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:15,
    paddingBottom:15,
    color:'#ffffff',
    backgroundColor:'#25323f',
    borderColor: '#25323f',
    borderRadius: 5
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ageMinContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ageMaxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  ageTitle: {
    marginRight: 10,
    fontFamily: 'Montserrat-Light',
    color: '#ffffff'
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
