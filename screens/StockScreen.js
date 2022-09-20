import {Text, View,
    StyleSheet, 
    SafeAreaView, ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from "react";
function StockScreen({navigation, route}){
    const theTicker = route.params.Ticker;
    const theOldLink = "https://sandbox.iexapis.com/stable/stock/"+theTicker+"/chart/1d?token=Tsk_9b260400520a4d23abfe1ef6cb0d3feb";
    const theNewLink = "https://query1.finance.yahoo.com/v11/finance/quoteSummary/"+theTicker+"?modules=financialData";
    const [isLoadingOld, setLoadingOld] = useState(true);
    const [isLoadingCurrent, setLoadingCurrent] = useState(true);

    const [closedData, setClosedData] = useState();
    const [currentData, setCurrentData] = useState();
    const [average, setAverage] = useState();
 //OLD Data
 useEffect(() => {
    fetch(theOldLink)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setClosedData(json[0].close);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoadingOld(false)); // change loading state
  }, []);
    //this is more like to update many times.
    //Current
    useEffect(() => {
        let interval = setInterval(() => {
            fetch(theNewLink)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
              setCurrentData(json.quoteSummary['result'][0].financialData.currentPrice.fmt);
            setAverage(100*(currentData-closedData)/closedData)
            })
            .catch((error) => alert(error)) // display errors
          .finally(() => setLoadingCurrent(false)); // change loading state  
        }, 1000);

        return () => clearInterval(interval);
})


 
async function getOldPriceAsync() {
    try {
        let response = await fetch(theOldLink);
        let json = await response.json();
        setClosedData(json[0].close);
        console.log(closedData);
        setLoadingOld(false);
    } catch (error) {
        alert(error);
    }    
    }
async function getCurrentPriceAsync() {
        try {
        let response = await fetch(theNewLink);
        let json = await response.json();
        setCurrentData(json.quoteSummary['result'][0].financialData.currentPrice.fmt);
        setLoadingCurrent(false);
        } catch (error) {
        alert(error);
        }    
    }

    return(

        <SafeAreaView>
        {/* While fetching show the indicator, else show response*/}
       {isLoadingOld || isLoadingCurrent? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
            <Text>{theTicker}</Text>
            <Text> Close Data {closedData}</Text>
            <Text> New Data {currentData}</Text>
            <Text>AVG: {average.toFixed(2)} %</Text>
        </View>
        )}
             </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 48,
      },})
export default StockScreen;