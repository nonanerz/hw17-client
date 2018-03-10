import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'

class RegistrationForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle='light-content' />
          <TextInput style={styles.input}
            autoCapitalize='none'
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='Email'
            onChangeText={(email) => this.props.onEmailChange(email)}
            placeholderTextColor='rgba(225,225,225,0.7)' />
          <TextInput style={styles.input}
            autoCapitalize='none'
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='Username'
            onChangeText={(name) => this.props.onNameChange(name)}
            placeholderTextColor='rgba(225,225,225,0.7)' />

          <TextInput style={styles.input}
            returnKeyType='go' ref={(input) => this.passwordInput = input}
            placeholder='Password'
            placeholderTextColor='rgba(225,225,225,0.7)'
            onChangeText={(password) => this.props.onPasswordChange(password)}
            secureTextEntry />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onRegistration}>
          <Text style={styles.buttonText}>REGISTRATION</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  loginButton: {
    backgroundColor: '#2980b6',
    color: '#fff'
  }

})

export default RegistrationForm
