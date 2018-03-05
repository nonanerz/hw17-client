import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{padding: 10}}>

                <Text>Login Screen</Text>

                <TextInput style={styles.inputStyle}
                           placeholder="email">
                </TextInput>

                <TextInput style={styles.inputStyle}
                           secureTextEntry={true}
                           placeholder="password">
                </TextInput>

                <TouchableOpacity onPress={this.login}>
                    <Text>Login</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        color:"green"
    },
    inputStyle: {

    }
})