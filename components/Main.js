import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.buttonsWrap}>
                    <Button title='Sign Up'
                            onPress={() => Actions.Registration({})}
                            color='purple'
                    />
                    <Button title='Sign In'
                            onPress={() => Actions.Login({})}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsWrap: {
        width: 100
    }
});

