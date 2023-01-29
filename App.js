import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
      <StatusBar style='dark'></StatusBar>
    </NavigationContainer>
  );
}
