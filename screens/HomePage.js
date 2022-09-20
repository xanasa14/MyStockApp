
 import React, { useState, useEffect } from "react";
 import {
   StyleSheet, StatusBar, Text, Button,
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
    console.log("Fucking work please");
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification', 
        data: {username: 'XavierNavarro'}
      }, 
      trigger:{
        seconds: 5
      }
    });
  }
    const [ticker, setTicker] = useState();

    function pickedCryptoNumberHandler(tick) {
        setTicker(tick);
        navigation.navigate('Crypto', {Ticker: tick});
    }
    function pickedStocksNumberHandler(tick) {
      setTicker(tick);
      navigation.navigate('Stocks', {Ticker: 'TSLA'});
  }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.tickerBar}>
          <StockBanner />

        </View>  

           <View style={styles.container}>
            <Button title='Schedule Notification'
                    onPress={scheduleNotificationHandler}/> 
            <StatusBar style='auto'/>

            <Prices />
            <LineCharting />
  
           </View>
           <Button onPress={pickedCryptoNumberHandler.bind(this,'ETC')}
            title="Go to Crypto" />

           <Button onPress={pickedStocksNumberHandler.bind(this,'TSLA')}
            title="Go to Stocks" />
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