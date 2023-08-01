import { StatusBar } from 'expo-status-bar';
import {useEffect,useRef,useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View , TextInput,TouchableOpacity} from 'react-native';
import {styles} from './components/Styles'
import Login from './screens/Login'
import User from './screens/Posts'
import SinglePostData from './screens/SinglePostData'


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Posts" component={User} />
      <Stack.Screen name="SinglePost" component={SinglePostData} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


