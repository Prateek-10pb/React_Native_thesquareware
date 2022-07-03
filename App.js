// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
       headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;