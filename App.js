
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import Prueba from './src/components/prueba';
import AppNavigatorWithState from './src/app-navigator-with-state'
import Loading from './src/components/loader'

export default class App extends Component {
  render() {
    console.log("Iniciando store react redux")
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    )
  }
}

