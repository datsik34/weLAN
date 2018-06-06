import React from 'react';
import { Badge } from 'react-native-elements';

export default class GameFilter extends React.Component {
  constructor(){
    super();
    this.state = { onClick: false, colorBadge: '#172533', backgroundColorBadge: 'white' }
  }

  _onClick = () => {
    if(!this.state.onClick){
      this.setState({
        onClick: true,
        colorBadge: 'white',
        backgroundColorBadge: '#008b6b',
      })
    } else {
      this.setState({
        onClick: false,
        colorBadge: '#172533',
        backgroundColorBadge: 'white',
      })
    }
  }

  render(){
    return(
      <Badge
        value={this.props.title}
        textStyle={{ color: this.state.colorBadge }}
        containerStyle={{ backgroundColor: this.state.backgroundColorBadge, margin: 5, padding:20}}
        onPress={this._onClick}
      />
    )
  }
}
