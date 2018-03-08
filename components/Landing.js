import React, { Component } from 'react'
import {
    Linking,
    View,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"


export default class Landing extends Component {

    componentDidMount() {
        Linking.addEventListener('url', this.props.handleOpenURL)
        Linking.getInitialURL().then((url) => {
            console.log(this.props.logout)
            if (url && this.props.logout === false) {
                this.props.handleOpenURL({ url })
            }
        })
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.props.handleOpenURL)
    }

    loginWithFacebook () {
        Linking.openURL('https://limitless-gorge-54663.herokuapp.com/auth/facebook/callback')
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.loginContainer}>

                <View>
                    <Text style={styles.headerText}>ChatApp</Text>
                    <LoginForm
                        onLogin={this.props.onLogin}
                        onEmailChange={this.props.onEmailChange}
                        onPasswordChange={this.props.onPasswordChange}
                    />
                    <RegistrationForm
                        onRegistration={this.props.onRegistration}
                        onEmailChange={this.props.onEmailChange}
                        onPasswordChange={this.props.onPasswordChange}
                        onNameChange={this.props.onNameChange}
                    />
                    <Text  style={styles.buttonText}>OR</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.loginWithFacebook}>
                        <Text  style={styles.buttonText}>Login with Facebook</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        margin: 10
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        margin: 20
    },
    headerText:{
        color: '#fff',
        textAlign: 'center',
        opacity: 0.9,
        width: 380,
        fontSize: 30
    },
})