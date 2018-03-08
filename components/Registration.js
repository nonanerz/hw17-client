import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios/index';
import { Actions } from "react-native-router-flux";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        };
        this.register = this.register.bind(this);

    }

    register () {
        let localThis = this;
        this.setState({
            message: ''
        });
        axios.post('https://limitless-gorge-54663.herokuapp.com/api/users', {
            "user": {
                "email": this.state.email.toString(),
                "name": this.state.name.toString(),
                "password": this.state.password.toString()
            }
        })
            .then(function (response) {
                if (response.data.user) {
                    Actions.Login({});
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
                    <Text style={styles.title}>Registration</Text>

                    <TextInput style={styles.inputStyle}
                               placeholder="Name"
                               onChangeText={(name) => this.setState({name})}
                    >
                    </TextInput>

                    <TextInput style={styles.inputStyle}
                               placeholder="Email"
                               onChangeText={(email) => this.setState({email})}
                    >
                    </TextInput>

                    <TextInput style={styles.inputStyle}
                               secureTextEntry={true}
                               placeholder="Password"
                               onChangeText={(password) => this.setState({password})}
                    >
                    </TextInput>

                    <Button
                        title='Sign Up'
                        onPress={this.register}
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