import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Chat from "./components/Chat";
import Login from './components/Login';
// import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class App extends React.Component {
    // _fbAuth() {
    //     LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
    //         if (result.isCancelled) {
    //             console.log('Login was cancelled')
    //         } else {
    //             console.log('Login was success ' + result.grantedPermissions.toString())
    //         }
    //     }, function (error) {
    //         console.log('Something went wrong' + error)
    //     })
    // }

    render() {

        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' initial component={ Login } hideNavBar/>
                </Scene>
            </Router>
            // <View>
            //     <TouchableOpacity onPress={this._fbAuth()}>
            //         <Text>Test</Text>
            //     </TouchableOpacity>
            //     {/*<Chat/>*/}
            // </View>
        )
    }
}

