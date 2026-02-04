// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
