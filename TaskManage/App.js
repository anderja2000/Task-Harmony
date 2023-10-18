import { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './Components/HomeScreen'
import CalendarPage from './Components/CalendarPage';
import ToDo from './Components/ToDo';
// import RouletteWheel from './Components/RouletteWheel';




const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name ="Calendar" component={CalendarPage}/>
        <Stack.Screen name="Agenda" component={ToDo}/>
        {/* <Stack.Screen name ="Roulette" component={RouletteWheel}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Add spacing between the TouchableOpacity and the message
  },
});
