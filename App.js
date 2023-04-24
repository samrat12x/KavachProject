
import React from 'react';

import {View} from 'react-native';

import Login from "./components/Login"
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign"
        options={{headerShown: false}}
         component={Signup} />
        <Stack.Screen name="Home"  component={Homepage} />
      </Stack.Navigator>
      
      
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Homepage/> */}
      </NavigationContainer>
    
  );
}






