import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

// const store = createStore(reducers)

class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyCaOn0faljDPLi6Ww02wEZXZczbKc8RXl8',
     authDomain: 'manager-a7ed8.firebaseapp.com',
     databaseURL: 'https://manager-a7ed8.firebaseio.com',
     storageBucket: 'manager-a7ed8.appspot.com',
     messagingSenderId: '401807125948'
   };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
