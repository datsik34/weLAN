import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";

textInputNickname = (props) => {
  const { input } = props;
  return (
      <Input
        onChangeText={input.onChange}
        value={input.value}
        inputContainerStyle={styles.inputContStyle}
        inputStyle={styles.inputStyle}
        placeholderTextColor={'white'}
        placeholder='NICKNAME'
      />
  );
}

textInputEmail = (props) => {
  const { input } = props;
  return (
      <Input
        onChangeText={input.onChange}
        value={input.value}
        inputContainerStyle={styles.inputContStyle}
        inputStyle={styles.inputStyle}
        placeholderTextColor={'white'}
        placeholder='EMAIL'
      />
  );
}

textInputPwd = (props) => {
  const { input } = props;
  return (
      <Input
        onChangeText={input.onChange}
        value={input.value}
        inputContainerStyle={styles.inputContStyle}
        inputStyle={styles.inputStyle}
        placeholderTextColor={'white'}
        placeholder='PASSWORD'
        secureTextEntry={true}
      />
  );
}

textInputDoB = (props) => {
  const { input } = props;
  return (
      <Input
        onChangeText={input.onChange}
        value={input.value}
        inputContainerStyle={styles.inputContStyle}
        inputStyle={styles.inputStyle}
        placeholderTextColor={'white'}
        placeholder='DAFE OF BIRTH'
      />
  );
}

class SignUpForm extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <Field name="nickname" component={textInputNickname}/>
        <Field name="email" component={textInputEmail}/>
        <Field name="pwd" component={textInputPwd}/>
        <Field name="dateofbirth" component={textInputDoB}/>
        <Button containerStyle={styles.btnContStyle} buttonStyle={styles.btnColor} titleStyle={styles.btnTitle} onPress={this.props.handleSubmit} title='SIGNUP'/>
      </View>
    )
  }
}
export default reduxForm({ form: 'signup' })(SignUpForm)

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
    borderColor: 'white'
  }
})
