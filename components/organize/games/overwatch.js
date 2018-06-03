import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class OverWatch extends React.Component {
  constructor(){
    super();
    this.state = {checked: false}
  }
  _toggleCheck = () => this.setState({ checked: !this.state.checked})

  isPicked(){
    if (!this.state.checked) {
      this.setState({ checked: !this.state.checked });
      this.props.picked();
    } else {
      this.setState({ checked: !this.state.checked });
      this.props.unpicked();
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <CheckBox checkedColor={'green'} checked={this.state.checked} containerStyle={styles.checkbox} right={true} onPress={this.isPicked.bind(this)}/>
        <TouchableOpacity style={styles.backgroundImage} onPress={this.isPicked.bind(this)}>
          <Image
            source={require('../../../assets/images/games/wallpaper/overwatch.jpg')}
            style={styles.backgroundImage}
            blurRadius={0.5}
          />
          <Image
            source={require('../../../assets/images/games/logo/overwatch-logo.png')}
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage : {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
  },
  logoImage: {
    width: '100%',
    height: '55%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    resizeMode: 'center'
  },
  flex: {
    flex: 1
  },
  checkbox: {
    zIndex: 1,
  }
})
