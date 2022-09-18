
 import React, { useState, useEffect } from "react";
 import {
   StyleSheet, StatusBar , Button} from "react-native";
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./screens/HomePage";
import CryptoScreen from "./screens/CryptoScreen";
const Stack = createNativeStackNavigator();

 function App (){ 

  
   return (
     <>
       <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Crypto" component={CryptoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
     </>
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