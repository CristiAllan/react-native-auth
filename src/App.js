import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import firebase from 'firebase'
import { Header } from './components/common';

class App extends Component {

  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAMKtMYY5g2o12xCf0Fanl9UveGnBPcEl8',
      authDomain: 'react-native-auth-2c49c.firebaseapp.com',
      databaseURL: 'https://react-native-auth-2c49c.firebaseio.com',
      projectId: 'react-native-auth-2c49c',
      storageBucket: 'react-native-auth-2c49c.appspot.com',
      messagingSenderId: '307532514969'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;