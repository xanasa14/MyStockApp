import {Text, View,
    StyleSheet, 
    SafeAreaView, ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from "react";


function CryptoScreen({ navigation, route}) {
    const theTicker = route.params.Ticker;
    const theLink = "https://min-api.cryptocompare.com/data/price?fsym="+ theTicker +"&tsyms=USD"
    const [isLoading, setLoading] = useState(true);

    const [theData, settheData] = useState();

   
      useEffect(() => {
        let interval = setInterval(() => {
            fetch(theLink)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
              settheData(json.USD);
            })
            .catch((error) => alert(error)) // display errors
          .finally(() => setLoading(false)); // change loading state  
        }, 1000);
        return () => clearInterval(interval);
})


      async function getTickerAsync() {
        try {
          let response = await fetch(theLink);
          let json = await response.json();
          settheData(json.USD);
          setLoading(false);
        } catch (error) {
          alert(error);
        }
      }
    return (
        <SafeAreaView>
        {/* While fetching show the indicator, else show response*/}
       {isLoading ? (
        <ActivityIndicator />
      ) : (
    <View style={styles.container}>
        <Text>This is the CryptoScreen {theTicker} {theData}</Text>
        <Text>{theData}</Text>
    </View> )}
             </SafeAreaView>

);
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 48,
      },})
export default CryptoScreen;