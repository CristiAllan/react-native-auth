import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAMKtMYY5g2o12xCf0Fanl9UveGnBPcEl8',
      authDomain: 'react-native-auth-2c49c.firebaseapp.com',
      databaseURL: 'https://react-native-auth-2c49c.firebaseio.com',
      projectId: 'react-native-auth-2c49c',
      storageBucket: 'react-native-auth-2c49c.appspot.com',
      messagingSenderId: '307532514969'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;