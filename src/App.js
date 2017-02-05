import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import Router from './Router'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
