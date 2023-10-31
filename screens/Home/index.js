import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://www.jsonkeeper.com/b/DCQG";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView className="bg-white pt-20 w-full h-full">
        <View className="px-4 flex-row relative w-full">
          <Ionicons
            name="search"
            size={20}
            className="absolute"
            style={{ position: "absolute", zIndex: 2, right: 30, top: 6 }}
          />
          <TextInput
            placeholder="cari aset"
            placeholderTextColor={"black"}
            className="bg-[#DFDFDF] w-full h-9 rounded-[20px] pl-4 mb-11"
          />
        </View>
        <View className="bg-violet-300 w-80 h-80 rounded-full absolute left-[-250] top-16 opacity-80" />
        <View className="bg-cyan-300 w-80 h-80 rounded-full absolute opacity-80 right-[-250] top-80" />
        <View className="px-4">
          <CryptoCard data={cryptoData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
