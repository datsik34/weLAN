import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class OptionsComponent extends React.Component {
  static navigationOptions = {
    title: '5/5 Finalise avec tes options'
  };

  //Navigation
  _goToSummary = () => this.props.navigation.navigate('Summary');
  _goBack = () => this.props.navigation.navigate('Place');

  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={{ padding: 20 }}>

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
              style={{
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
              }}
            />

            <Text style={styles.title}>NOMBRE DE PARTICIPANTS :</Text>
            <TextInput
              placeholder='0'
              keyboardType='numeric'
              keyboardAppearance='dark'
              underlineColorAndroid='rgba(0,0,0,0)'
              style={{
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
              }}
            />

            <Text style={styles.title}>TRANCHE D'AGE :</Text>



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
