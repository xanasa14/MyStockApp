
 import React, { useState, useEffect } from "react";
 import {
   StyleSheet, StatusBar,
   Text, Button,
   View, SafeAreaView } from "react-native";
import StockBanner from "../components/StockBanner";
import Prices from "../components/Prices";
import LineCharting from "../components/LineCharting";
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});
function HomePage({navigation}){
  function scheduleNotificationHandler(){
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification", 
        data: {username: "Xavier"}
      }, trigger:{
        seconds: 5
      }
    });
  }
    const [ticker, setTicker] = useState();

    function pickedNumberHandler(tick) {
        setTicker(tick);
        navigation.navigate('Crypto', {Ticker: tick});
    }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.tickerBar}>
          <StockBanner />

        </View>  

           <View style={styles.container}>
           <Button title="Schedule Notifications" onpress={scheduleNotificationHandler}> </Button>

            <Prices />
            <LineCharting />
  
           </View>
           <Button onPress={pickedNumberHandler.bind(this,'ETC')}
            title="Go to Crypto" />
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 48,
    },
    movieText: {
      fontSize: 26,
      fontWeight: "200",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
    },
    description: {
      textAlign: "center",
      marginBottom: 18,
      fontWeight: "200",
      color: "green",
    },
    tickerBar:{
     backgroundColor:'black',
     marginTop: 10
    }
   
  });
export default HomePage;