import React from 'react'
import {Alert, StyleSheet, View, AsyncStorage} from 'react-native'
import Landing from "./components/Landing"
import axios from "axios/index"
import Chat from "./components/Chat"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            name: null,
            password: null,
            user: null,
            logout: true
        }
        this.onLogin = this.onLogin.bind(this)
        this.onRegistration = this.onRegistration.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.handleOpenURL = this.handleOpenURL.bind(this)
        this.saveData = this.saveData.bind(this)
        this.onLogout = this.onLogout.bind(this)
    }

    componentWillMount () {
        AsyncStorage.getItem('user').then((value) => {
            this.setState({'user': JSON.parse(value), logout: false})
        }).done()
    }

    saveData (value) {
        AsyncStorage.setItem('user', JSON.stringify(value))
        this.setState({user: value})
    }

    onLogin() {
        if (!this.state.email || !this.state.password) {
            Alert.alert('Please fill out required fields.')
        } else {
            axios.post(`https://limitless-gorge-54663.herokuapp.com/api/login`, {
                user: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
                .then(response => {
                    if (response.status !== 200) {
                        Alert.alert('Bad request.')
                    } else {
                        this.saveData(response.data.user, logout: false)
                    }
                })
        }
    }
    onRegistration() {
        if (!this.state.email || !this.state.password || !this.state.name) {
            Alert.alert('Please fill out required fields.')
            console.log(this.state)
        } else {
            axios.post(`https://limitless-gorge-54663.herokuapp.com/api/users`, {
                user: {
                    email: this.state.email,
                    name: this.state.name,
                    password: this.state.password
                }
            })
                .then(response => {
                    console.log(response)
                    this.setState({user: response.data.user, logout: false})
                })
                .catch(e => {
                    console.log(e)

                    Alert.alert(e.message)
                })
        }
    }

    onEmailChange(email) {
        this.setState({email})
    }

    onPasswordChange(password) {
        this.setState({password})
    }

    onNameChange(name) {
        this.setState({name})
    }

    handleOpenURL = ({ url }) => {
        const [, user_string] = url.match(/user=([^#]+)/)
        this.setState({
            user: JSON.parse(decodeURI(user_string))
        })
        console.log(this.state.user, 11111)
    }

    onLogout () {
        this.setState({user: null, logout: true})
        AsyncStorage.removeItem('user')
    }

  render() {
      return (
      <View style={styles.container}>
          {
              this.state.user ?
                  <Chat user={this.state.user} onLogout={this.onLogout}/> :
                  <Landing
                      logout={this.state.logout}
                      onLogin={this.onLogin}
                      onRegistration={this.onRegistration}
                      onEmailChange={this.onEmailChange}
                      onPasswordChange={this.onPasswordChange}
                      onNameChange={this.onNameChange}
                      handleOpenURL={this.handleOpenURL}
                  />
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
        flex: 1,
    },
})
