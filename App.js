import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';
import { Login, Signup, Welcome, Home, Doctor, Pharmacy, Diagnostics } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

export default class App extends React.Component {


  render(){
  return (
  
 <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Diagnostics"
          component={Diagnostics}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>



  );
}
}

