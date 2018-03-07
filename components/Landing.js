import React, { Component } from 'react';
import {
    Linking,
    View,
    Button,
    Text
} from 'react-native';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }

        this.handleOpenURL = this.handleOpenURL.bind(this)
        this.loginWithFacebook = this.loginWithFacebook.bind(this)
    }
    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
        Linking.getInitialURL().then((url) => {
            if (url) {
                this.handleOpenURL({ url });
            }
        });
    };

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({ url }) => {
        const [, user_string] = url.match(/user=([^#]+)/);
        this.setState({
            user: JSON.parse(decodeURI(user_string))
        });
    };

    loginWithFacebook = () => Linking.openURL('https://limitless-gorge-54663.herokuapp.com/auth/facebook/callback');

    render() {
        const user = this.state.user;
        return (
            <View>
                {user
                    ? <Text>Welcome {user.name}!</Text> :

                    <Button
                        name="facebook"
                        title="Login"
                        backgroundColor="#3b5998"
                        onPress={this.loginWithFacebook}
                    >
                        Login with Facebook
                    </Button>
                }
            </View>
        );
    }
}
