import React from 'react';
import { View } from 'react-native';
import Chat from "./components/Chat";

export default class App extends React.Component {
  render() {

      return (
      <View style={styles.container}>
          <Chat/>
      </View>
    );
  }
}

