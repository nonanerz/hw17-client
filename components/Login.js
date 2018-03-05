import React from 'react';
// import io from 'socket.io-client';
// import axios from 'axios'
import { StyleSheet, View, Text } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount() {
    //     axios.get('https://limitless-gorge-54663.herokuapp.com/api/messages') //<--- your server here
    //         .then(response => {
    //             this.setState({
    //                 messages: response.data['messages']
    //             })
    //         })
    //
    //     this.socket = socket = io('https://limitless-gorge-54663.herokuapp.com', { jsonp: false, transports: ['websocket'] }) //<--- your server here
    //     socket.on('chat message', (msg) => {
    //         let messages = this.state.messages
    //         console.log(msg)
    //         messages.unshift(msg)
    //         this.setState({messages})
    //     });
    // }

    // onSubmit() {
    //     if (this.state.text.trim().length > 0) {
    //         let msg = {
    //             text: this.state.text,
    //             author: 'anonymous',
    //             createdAt: new Date
    //         }
    //         this.socket.emit('chat message', msg);
    //     }
    //     this.setState({text: ''})
    // }

    render() {
        return (
            <View style={{padding: 10}}>
                {/*<TextInput*/}
                    {/*style={{height: 40}}*/}
                    {/*placeholder="Type your message here!"*/}
                    {/*value={this.state.text}*/}
                    {/*onChangeText={(text) => this.setState({text})}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*title="Submit"*/}
                    {/*color="#841584"*/}
                {/*/>*/}
                <Text>Test</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})