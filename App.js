import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Screen1';
import PickColor from './Screen2';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
         <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="home"
         >
          <Stack.Screen name="Screen1" component={MainScreen} /> 
          <Stack.Screen name="Screen2" component={PickColor}/>
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}