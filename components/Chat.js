import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Button
                    onPress={this.onSubmit}
                    title="Submit"
                    color="#841584"
                />
            </View>
        );
    }
}