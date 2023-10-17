import { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar, LocaleConfig } from "react-native-calendars";

import HomeScreen from './Components/HomeScreen'
import CalendarPage from './Components/CalendarPage';
import ToDo from './Components/ToDo';
import RouletteWheel from './Components/RouletteWheel';

// function HomeScreen({navigation}) {
//   const [messageVisible, setMessageVisible] = useState(false);

//   // Function to toggle the message visibility
//   const toggleMessage = () => {
//     setMessageVisible(!messageVisible);
//   };

//   return (
//     <View>
//       <Text>Home screen</Text>
//       <TouchableOpacity
//         style={{
//           backgroundColor: "blue",
//           padding: 10,
//           borderRadius: 10,
//         }}
//         onPress= { () => navigation.navigate("Calendar")}
//       >
//         <Text style={{ color: "white" }}>To Calendar</Text>
//       </TouchableOpacity>

//       {messageVisible && (
//         <View style={styles.messageContainer}>
//           <Text style={{ color: 'black' }}>Message Displayed on Click!</Text>
//         </View>
//       )}
//     </View>
//   );
// }

//  code for the calendar 

// function CalendarPage() { 
//   const [selected, setSelected] = useState('');

//     //   • Home Screen Customization: Users can personalize the app's home screen, adding and arranging widgets.
//     // • Calendar Integration: Import and view assignments from .ics or Google Calendar.
//     // • Study Session Planning: Generate basic study plans based on imported calendars.
//     // • Task Management: Implement the task breakdown roulette for random task suggestions.
//     // • Basic UI: Establish a clean and functional user interface for the home screen and the study session view.
    
//       return (
    
//         <Calendar 
//           style = {{
//             marginTop: 100,  
//             borderWidth:2, 
//             borderColor: "red", 
            
//             backgroundColor: "#000000", 
//             height: 500, 
//           }}
    
//           theme = {{
//             calendarBackground: '#FEC7F8',
             
//           }}
    
//           onDayPress={day => {
//             setSelected(day.dateString);
//           }}
//           markedDates={{
//             [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
//           }}
//         />
//       );
// }


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name ="Calendar" component={CalendarPage}/>
        <Stack.Screen name ="Roulette" component={RouletteWheel}/>

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
