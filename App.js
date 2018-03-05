import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// import Chat from "./components/Chat";
import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class App extends React.Component {
    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
            if (result.isCancelled) {
                console.log('Login was cancelled')
            } else {
                console.log('Login was success ' + result.grantedPermissions.toString())
            }
        }, function (error) {
            console.log('Something went wrong' + error)
        })
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._fbAuth()}>
                    <Text>Test</Text>
                </TouchableOpacity>
                {/*<Chat/>*/}
            </View>
        );
    }
}

