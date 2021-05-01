import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Campobase from './components/CampobaseComponent';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Campobase />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});