import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";

function textInputEmail(props) {
  const { input } = props;
  return(
    <Input
      onChangeText={input.onChange}
      value={input.value}
      inputContainerStyle={styles.inputContStyle}
      inputStyle={styles.inputStyle}
      placeholderTextColor='white'
      placeholder='EMAIL'
      type="email"
    />
  );
}
function textInputPwd(props) {
  const { input } = props;
  return(
    <Input
      onChangeText={input.onChange}
      value={input.value}
      inputContainerStyle={styles.inputContStyle}
      inputStyle={styles.inputStyle}
      placeholderTextColor='white'
      placeholder='PASSWORD'
      secureTextEntry={true}
    />
  );
}

class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <Field name="email" component={textInputEmail}/>
        <Field name="pwd" component={textInputPwd}/>
        <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColor} titleStyle={styles.btnTitle} onPress={this.props.handleSubmit} title='LOGIN'/>
      </View>
    )
  }
}
export default reduxForm({ form: 'login' })(LoginForm)

const styles = StyleSheet.create({
  login: {
    width: 300,
    alignItems: 'center'
  },
  inputStyle: {
    color: 'white',
  },
  btnTitle: {
    color: '#172533',
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnColor: {
    backgroundColor: '#00b14c',
    width: 230,
    marginBottom: 6
  },
  btnContStyle: {
    marginTop: 20
  },
  inputContStyle: {
    borderColor: 'white',
  }
})
