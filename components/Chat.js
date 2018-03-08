import React from 'react';
import io from 'socket.io-client';
import axios from 'axios'
import { StyleSheet, FlatList, View, Button, TextInput, Text } from 'react-native';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: [],
            name: this.props.user
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('https://limitless-gorge-54663.herokuapp.com/api/messages') //<--- your server here
            .then(response => {
                this.setState({
                    messages: response.data['messages']
                })
            })

        this.socket = socket = io('https://limitless-gorge-54663.herokuapp.com', { jsonp: false, transports: ['websocket'] }) //<--- your server here
        socket.on('chat message', (msg) => {
            let messages = this.state.messages
            messages.unshift(msg)
            this.setState({messages})
        });
    }

    onSubmit() {
        if (this.state.text.trim().length > 0) {
            let msg = {
                text: this.state.text,
                author: this.state.name,
                createdAt: new Date
            }
            this.socket.emit('chat message', msg);
        }
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type your message here!"
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    onPress={this.onSubmit}
                    title="Submit"
                    color="#841584"
                />
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={this.state.messages}
                    extraData={this.state}
                    renderItem={({item}) =>
                    <View>
                        <Text style={styles.item}>{item.text}</Text>
                        <Text style={styles.author}>{item.author} at {item.createdAt}</Text>
                    </View>
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 3,
        fontSize: 18,
    },
    author: {
        fontSize: 10,
        height: 30,
    }
})