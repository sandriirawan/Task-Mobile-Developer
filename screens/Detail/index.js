import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";

const Detail = () => {
  const route = useRoute();
  const cryptoData = route.params.cryptoData;

  const priceHistoryData = [
    [1000, "10:00 AM"],
    [1200, "11:00 AM"],
    [1300, "12:00 PM"],
  ];

  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-20">
      <View>
        <Text>
          {cryptoData.symbol} / {cryptoData.pair}
        </Text>
        <Text>IDR {cryptoData.price}</Text>
      </View>
      <LineChart
        data={{
          labels: priceHistoryData.map((data) => data[1]),
          datasets: [
            {
              data: priceHistoryData.map((data) => data[0]),
            },
          ],
        }}
        width={300}
        height={200}
        yAxisSuffix=" IDR"
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </SafeAreaView>
  );
};

export default Detail;
