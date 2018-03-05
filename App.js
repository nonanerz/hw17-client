import React from 'react';
// import { View, Text } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Chat from "./components/Chat";
import Login from "./components/Login";
import Registration from "./components/Registration";

export default class App extends React.Component {
  render() {
      return (
          <Router>
              <Stack key="root">
                  <Scene key="Login" component={ Login } hideNavBar />
                  <Scene key="Registration" component={ Registration }  hideNavBar />
                  <Scene key="Chat" component={ Chat } initial hideNavBar />
              </Stack>
          </Router>
      )
  }
}

