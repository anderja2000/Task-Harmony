import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

export default function Home({navigation}) { 
    return ( 
        <View style = {styles.container}>
            <Text>Home screen</Text>
            <TouchableOpacity
                onPress={ () => navigation.navigate('CalendarPage')}
                style = {styles.toCalendar}
            >
                <Text style = {{ color: "white"}}>Go TO Calendar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
    },
    toCalendar:{ 
        backgroundColor: 'blue', 
        padding: 10 , 
        borderRadius: 5, 
    }
})