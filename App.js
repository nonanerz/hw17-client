import React from 'react';
// import { View, Text } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Chat from "./components/Chat";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from './components/Main';

export default class App extends React.Component {
  render() {
      return (
          <Router>
              <Stack key="root">
                  <Scene key="Main" component={ Main } initial hideNavBar />
                  <Scene key="Login" component={ Login } hideNavBar />
                  <Scene key="Registration" component={ Registration } hideNavBar />
                  <Scene key="Chat" component={ Chat } hideNavBar />
              </Stack>
          </Router>
      )
  }
}

