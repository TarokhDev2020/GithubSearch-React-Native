import React from 'react';
import MainTabNavigator from './components/routes/TabNavigator';
import store from './store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Root} from 'native-base';

export default function App() {
  return (
    <Provider store = {store}>
      <Root>
          <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </Root>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
