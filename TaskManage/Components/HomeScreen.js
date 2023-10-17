import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function HomeScreen({ navigation }) {
  const [messageVisible, setMessageVisible] = useState(false);

  // Function to toggle the message visibility
  const toggleMessage = () => {
    setMessageVisible(!messageVisible);
  };

  return (
    <View style = {{ 
      flex: 1, 
    }}>
      <View style= {{
        flex: 8, 
      }}>
      <Text>Home screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Text style={{ color: "white" }}>To Calendar</Text>
      </TouchableOpacity>

      {messageVisible && (
        <View style={styles.messageContainer}>
          <Text style={{ color: 'black' }}>Message Displayed on Click!</Text>
        </View>
      )}
      </View>
      <View style = {{
        flexDirection: "row",
        borderTopRightRadius: 15, 
        borderTopLeftRadius: 15, 
        backgroundColor: "red", 
        alignItems: "center",
        gap: 5, 
        justifyContent: "center", 
        flex:1.5,
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calendar")}
        >
          <Image source={require('./Images/Calendar.png')}
            style={{
              borderRadius: 15, 
              width: 75,
              height: 75,
              backgroundColor: "pink",
            }} />
            

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Agenda")}
        >
          <Image source={require('./Images/agenda.jpg')}
            style={{
              borderRadius: 10, 
              width: 75,
              height: 75,
              backgroundColor: "pink",
            }} />
          
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Roulette")}
        >
          <Image source={require('./Images/roulette.png')}
            style={{
              borderRadius: 10, 
              width: 75,
              height: 75,
              backgroundColor: "pink",
            }} />
          
        </TouchableOpacity>
      </View>
    </View>
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