import React from 'react';
import io from 'socket.io-client';
import axios from 'axios'
import { StyleSheet, FlatList, View, TouchableOpacity, TextInput, Text, Vibration } from 'react-native';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: []
        }
        ;
        this.onSubmit = this.onSubmit.bind(this)
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
            // Vibration.vibrate([500, 500])
            let messages = this.state.messages
            messages.unshift(msg)
            this.setState({messages})
        });
    }

    onSubmit() {
        if (this.state.text.trim().length > 0) {
            let msg = {
                text: this.state.text,
                author: this.props.user.name,
                createdAt: new Date
            }
            this.socket.emit('chat message', msg);
        }
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TouchableOpacity onPress={this.props.onLogout}>
                    <Text style={styles.logout}>LOGOUT</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message here!"
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onSubmit}>
                    <Text  style={styles.buttonText}>SEND</Text>
                </TouchableOpacity>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={this.state.messages}
                    extraData={this.state}
                    renderItem={({item}) =>
                    <View>
                        <Text style={styles.input}>{item.text}</Text>
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
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        margin: 10
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
    },
    author:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'right',
    },
    button:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    },
    logout: {
        height: 40,
        color: '#fff',
        textAlign: 'right'
    }

})