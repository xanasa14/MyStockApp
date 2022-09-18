import React, { useState, useEffect } from "react";
import {
  StyleSheet, StatusBar,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Dimensions } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextTicker from 'react-native-text-ticker';
import {
 LineChart,
 BarChart,
 PieChart,
 ProgressChart,
 ContributionGraph,
 StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

function LineCharting (){
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
      const chartConfig = {
        backgroundGradientFrom: "#13703d",
        backgroundGradientToOpacity: 0.8,
        color: (opacity = 1) => `rgba(26, 255, 80, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
      };
       // managing state with 'useState'
       const [isLoading, setLoading] = useState(true);
    
    return (
        <View>
        <Text>Line Chart</Text>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
    )
}
export default LineCharting;