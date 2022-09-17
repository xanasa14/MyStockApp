
 import React, { useState, useEffect } from "react";
 import {
   StyleSheet, StatusBar,
   Text,
   View,
   SafeAreaView,
   ActivityIndicator,
   FlatList,
   Alert, ScrollView,
 } from "react-native";
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import TextTicker from 'react-native-text-ticker';
import CryptoScreen from "./screens/CryptoScreen";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;


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


  //


 function App (){
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];
  const chartConfig = {
    backgroundGradientFrom: "#13703d",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(26, 255, 80, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };
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
  
   // similar to 'componentDidMount', gets called once
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
   // Also get call asynchronous function
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
  async function getAPPLAsync() {
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
     <View style={styles.tickerBar}>
        <TextTicker
          style={{ fontSize: 24, color:'yellow'}}
          bounceSpeed={1}
          duration={13000}
          loop
          bounce
          repeatSpacer={8}
          marqueeDelay={1500}
        >
         BTC ${btcData} || ETH ${ethData}|| ETC ${etcData}||
         SOL: ${solData} || SHIB ${shibData} || COMP ${compData}||
         DOGE ${dogeData}|| LTC ${ltcData}||
        </TextTicker>    
        </View>  
       {/* While fetching show the indicator, else show response*/}
       {isLoading ? (
         <ActivityIndicator />
       ) : (
         <View style={styles.container}>
           {/* Title from URL */}
           {/* Display each movie */}
           
           {/* Show the stock prices */}
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

     
        <View>
        <Text>Line Chart</Text>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
     </SafeAreaView>
     


   );
 };
 
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

 export default App;