import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios/index';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            email: '',
            password: ''

        };
        this.login = this.login.bind(this);
    }

    login () {
        let localThis = this;
        this.setState({
            message: ''
        });
        axios.post('https://limitless-gorge-54663.herokuapp.com/api/login', {
            "user": {
                "email": this.state.email.toString(),
                "password": this.state.password.toString()
            }
        })
            .then(function (response) {
                if (response.data.user) {
                    Actions.Chat({user: response.data.user.name});
                } else {
                    localThis.setState({
                        message: response.data['message']
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <View style={styles.pageWrapper}>

                <View style={styles.formWrapper}>
                    <Text style={styles.title}>Login Screen</Text>

                    <TextInput style={styles.inputStyle}
                               placeholder="email"
                               onChangeText={(email) => this.setState({email})}
                    >
                    </TextInput>

                    <TextInput style={styles.inputStyle}
                               secureTextEntry={true}
                               placeholder="password"
                               onChangeText={(password) => this.setState({password})}
                    >
                    </TextInput>
                    <Text>{this.state.message}</Text>

                    <Button
                        title='Sign in'
                        onPress={this.login}
                        color='purple'
                    />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'purple',
        textAlign: 'center'
    },
    formWrapper: {
        width: 300
    },
    pageWrapper: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color:"green"
    }
});