import {Text, View,
    StyleSheet, 
    SafeAreaView, ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from "react";

function Prices (){
    const stockPrices ={
        btcURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
        ethURL: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
        shibURL: "https://min-api.cryptocompare.com/data/price?fsym=SHIB&tsyms=USD",
        solURL: "https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD",
        compoundURL: "https://min-api.cryptocompare.com/data/price?fsym=COMP&tsyms=USD",
        dogeURL: "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD",
        etClassicURL:"https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD",
        ltcURL: "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD",
        applURL: "https://query1.finance.yahoo.com/v11/finance/quoteSummary/aapl?modules=financialData",
        tslaURL: "https://query1.finance.yahoo.com/v11/finance/quoteSummary/tsla?modules=financialData",
      }
        // managing state with 'useState'
        const [isLoading, setLoading] = useState(true);
        const [btcData, setbtcData] = useState();
        const [ethData, setethData] = useState(); 
        const [shibData, setshibData] = useState();
        const [solData, setsolData] = useState();
        const [compData, setcompData] = useState();
        const [dogeData, setdogeData] = useState();
        const [etcData, setetcData] = useState();
        const [ltcData, setltcData] = useState();
        const [applData, setaaplData] = useState();
        const [tslaData, setTSLADATA] = useState();

        //BTC
   useEffect(() => {
    fetch(stockPrices.btcURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
       setbtcData(json.bpi.USD.rate);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);
  //ETH
  useEffect(() => {
   fetch(stockPrices.ethURL)
     .then((response) => response.json()) // get response, convert to json
     .then((json) => {
      setethData(json.USD);
     })
     .catch((error) => alert(error)) // display errors
     .finally(() => setLoading(false)); // change loading state
 }, []);

 // SHIB
 useEffect(() => {
   fetch(stockPrices.shibURL)
     .then((response) => response.json()) // get response, convert to json
     .then((json) => {
      setshibData(json.USD);
     })
     .catch((error) => alert(error)) // display errors
     .finally(() => setLoading(false)); // change loading state
 }, []);
 // SOLANA
 useEffect(() => {
   fetch(stockPrices.solURL)
     .then((response) => response.json()) // get response, convert to json
     .then((json) => {
       setsolData(json.USD);
     })
     .catch((error) => alert(error)) // display errors
     .finally(() => setLoading(false)); // change loading state
 }, []);
 //COMP
 useEffect(() => {
   fetch(stockPrices.compoundURL)
     .then((response) => response.json()) // get response, convert to json
     .then((json) => {
       setcompData(json.USD);
     })
     .catch((error) => alert(error)) // display errors
     .finally(() => setLoading(false)); // change loading state
 }, []);
 //DOGE
 useEffect(() => {
   fetch(stockPrices.dogeURL)
     .then((response) => response.json()) // get response, convert to json
     .then((json) => {
       setdogeData(json.USD);
     })
     .catch((error) => alert(error)) // display errors
     .finally(() => setLoading(false)); // change loading state
 }, []);
 //ETC
 useEffect(() => {
   fetch(stockPrices.etClassicURL)
     .then((response) => response.json()) // get response, convert to json
     .then((json) => {
       setetcData(json.USD);
     })
     .catch((error) => alert(error)) // display errors
     .finally(() => setLoading(false)); // change loading state
 }, []);
   //LTC LiteCoin
   useEffect(() => {
     fetch(stockPrices.ltcURL)
       .then((response) => response.json()) // get response, convert to json
       .then((json) => {
         setltcData(json.USD);
       })
       .catch((error) => alert(error)) // display errors
       .finally(() => setLoading(false)); // change loading state
   }, []);
  //APPL
  useEffect(() => {
    fetch(stockPrices.applURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
       setaaplData(json.quoteSummary['result'][0].financialData.currentPrice.fmt);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);
  //TSLA
  useEffect(() => {
    fetch(stockPrices.tslaURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
       setTSLADATA(json.quoteSummary['result'][0].financialData.currentPrice.fmt);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);
    //BTC
    async function getBTCAsync() {
        try {
          let response = await fetch(stockPrices.btcURL);
          let json = await response.json();
          setbtcData(json.bpi.USD.rate);
          setLoading(false);
        } catch (error) {
          alert(error);
        }
      }
      //ETH
      async function getETHAsync() {
       try {
         let response = await fetch(stockPrices.ethURL);
         let json = await response.json();
         setethData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
      //ETC Classic
      async function getETHCAsync() {
       try {
         let response = await fetch(stockPrices.etClassicURL);
         let json = await response.json();
         setetcData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
     //SOL
     async function getSOLsync() {
       try {
         let response = await fetch(stockPrices.solURL);
         let json = await response.json();
         setsolData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
     //SHIB 
     async function getSHIBsync() {
       try {
         let response = await fetch(stockPrices.shibURL);
         let json = await response.json();
         setshibData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
     //COMP 
     async function getCOMPAsync() {
       try {
         let response = await fetch(stockPrices.compoundURL);
         let json = await response.json();
         setcompData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
     //DOGE
     async function getDogeAsync() {
       try {
         let response = await fetch(stockPrices.dogeURL);
         let json = await response.json();
         setdogeData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
     //LTC
     async function getLTCAsync() {
       try {
         let response = await fetch(stockPrices.ltcURL);
         let json = await response.json();
         setltcData(json.USD);
         setLoading(false);
       } catch (error) {
         alert(error);
       }
     }
       //APPL
    async function getAPPLAsync() {
        try {
        let response = await fetch(stockPrices.applURL);
        let json = await response.json();
        setaaplData(json.quoteSummary['result'][0].financialData.currentPrice.fmt);
        setLoading(false);
        } catch (error) {
        alert(error);
        }    
    }

    //TSLA
    async function getTSLAsync() {
        try {
        let response = await fetch(stockPrices.tslaURL);
        let json = await response.json();
        setTSLADATA(json.quoteSummary['result'][0].financialData.currentPrice.fmt);
        setLoading(false);
        } catch (error) {
        alert(error);
        }    
    }
    return (

        <SafeAreaView style={styles.container}>
     
       {/* While fetching show the indicator, else show response*/}
       {isLoading ? (
         <ActivityIndicator />
       ) : (
         <View style={styles.container}>
           
            <Text>Bitcoin: $ {btcData}</Text>
            <Text>Ethereum: ${ethData}</Text>
            <Text>Ethereum Classic: ${etcData}</Text>
            <Text>Solana: ${solData}</Text>
            <Text>Shibu: $ {shibData}</Text>
            <Text>Compound: $ {compData}</Text>
            <Text>Doge: $ {dogeData}</Text>
            <Text>Lite Coin: $ {ltcData}</Text>
            <Text>APPL: ${applData}</Text>
            <Text>TSLA: ${tslaData}</Text>
         </View>
         )}

         </SafeAreaView>
       )}


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
export default Prices; 