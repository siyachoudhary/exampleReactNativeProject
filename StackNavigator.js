import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import StudySessions from './screens/StudySessions';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: true}}>
        <Stack.Group>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Contact' component={Contact}/>
            <Stack.Screen name='Study Session' component={StudySessions}/>
        </Stack.Group>
      </Stack.Navigator>
  )
}

export default StackNavigator