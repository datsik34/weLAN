import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Overlay, Icon, Button, Modal } from 'react-native-elements';
import { connect } from 'react-redux';

class Event extends React.Component {
  render(){

    var smokerInfo;
    if(this.props.smoker){
      smokerInfo = 'Fumeurs acceptés'
    } else {
      smokerInfo = 'Non fumeur'
    }

    return(
      <Overlay isVisible={this.props.eventIsSelected}
        overlayStyle={{ padding: 20 }}
        windowBackgroundColor='rgba(24,38,51,0.80)'
        width='90%'
        height='85%'
        borderRadius={5}
        >
        <View style={Styles.headerModal}>
          <Icon name='close' size={20} color='black' width={window.height} onPress={this.props.onClickCloseEvent}/>
        </View>
        <ScrollView>
          <View style={Styles.imgLanContainer}>
            <Image style={Styles.imgLan} source={require('../../assets/images/games/wallpaper/test.jpg')}/>
          </View>
          <Text style={Styles.subTitle}>DÉCOUVREZ LA LAN ...</Text>
          <Text style={Styles.titleLan}>{this.props.titleLan}</Text>
          <Text style={Styles.descLan}>{this.props.description}</Text>
          <View style={Styles.infoLanContainer}>
            <View style={Styles.infoLan}>
              <View>
                <Icon name='face' color='#008b6b'/>
              </View>
              <Text style={Styles.moreInfosLan}>Organisée par : {this.props.author}</Text>
            </View>
            <View style={Styles.infoLan}>
              <View>
                <Icon name='account-box' color='#008b6b' />
              </View>
              <Text style={Styles.moreInfosLan}>{this.props.maxPeople} pers. max</Text>
            </View>
            <View style={Styles.infoLan}>
              <View>
                <Icon name='date-range' color='#008b6b' />
              </View>
              <Text style={Styles.moreInfosLan}>{this.props.startDate}  /  {this.props.endDate}</Text>
            </View>
            <View style={Styles.infoLan}>
              <View>
                <Icon name='place' color='#008b6b' />
              </View>
              <Text style={Styles.moreInfosLan}>{this.props.address}</Text>
            </View>
            <View style={Styles.infoLan}>
              <View>
                <Icon name='cake' color='#008b6b' />
              </View>
              <Text style={Styles.moreInfosLan}>{this.props.minAge} - {this.props.maxAge} ans</Text>
            </View>
            <View style={Styles.infoLan}>
              <View>
                <Icon name='smoking-rooms' color='#008b6b' />
              </View>
              <Text style={Styles.moreInfosLan}>{smokerInfo}</Text>
            </View>
          </View>
          <Button
            title='Participer'
            titleStyle={{ fontFamily: 'Montserrat-Bold', fontSize: 14, color: '#ffffff'}}
            buttonStyle={{ backgroundColor: '#21c065', borderRadius: 5 }}
            containerStyle={{ marginTop: 20 }}
          />
        </ScrollView>
      </Overlay>
    )
  }
}

function mapDispatshToProps(dispatch){
  return{
    onClickCloseEvent: function(){
      dispatch( {type: 'closeEventPopup'} );
    }
  }
};

function mapStateToProps(state){
  return{
    eventIsSelected: state.eventModal.eventIsSelected,
    titleLan: state.eventModal.titleLan,
    author: state.eventModal.author,
    description: state.eventModal.description,
    maxPeople: state.eventModal.maxPeople,
    startDate: state.eventModal.startDate,
    endDate: state.eventModal.endDate,
    address: state.eventModal.address,
    minAge: state.eventModal.minAge,
    maxAge: state.eventModal.maxAge,
    smoker: state.eventModal.smoker
  }
};

export default connect(mapStateToProps, mapDispatshToProps)(Event);

const Styles = StyleSheet.create({
  headerModal: {
    flexDirection: 'row'
  },
  imgLanContainer: {
    height: 150,
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 10
  },
  imgLan: {
    flex: 1,
    width: null
  },
  subTitle: {
    marginTop: 10,
    fontFamily: 'Teko-Light',
  },
  titleLan: {
    fontFamily: 'Montserrat-Bold',
    fontSize:20,
    color: '#008b6b',
    marginTop: -8,
  },
  descLan: {
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
  },
  infoLanContainer: {
    marginTop: 15
  },
  infoLan: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreInfosLan: {
    marginLeft: 10,
    fontFamily: 'Teko-Light',
    fontSize: 15,
  }
})
