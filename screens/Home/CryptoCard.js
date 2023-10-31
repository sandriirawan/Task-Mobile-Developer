import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CryptoCard = (props) => {
  const { data } = props;

  const navigation = useNavigation();

  const handleCardPress = (item) => {
    navigation.navigate("Detail", { cryptoData: item });
  };

  return (
    <View className="pb-32">
      {data.map((item, index) => (
        <TouchableOpacity
          className="w-full h-[86px] bg-[#F0F0F04D] flex-row p-3 items-center justify-between mb-2 rounded-2xl"
          key={index}
          onPress={() => handleCardPress(item)}
        >
          <View className="flex-row space-x-2">
            <Image source={{ uri: item.icon }} className="w-8 h-8" />
            <View className="flex-col space-y-1">
              <Text className="text-[#6E7499] font-medium text-sm">
                {item.symbol} / {item.pair}
              </Text>
              <Text className="font-medium text-base">IDR {item.price}</Text>
              <Text className="text-[#24A959] font-medium text-xs">
                Vol {item.vol}
              </Text>
            </View>
          </View>
          <View
            className={`w-[71px] h-[27px] rounded-[20px] justify-center items-center ${
              parseFloat(item.change) < 0 ? "bg-[#F35242]" : "bg-[#24A959]"
            }`}
          >
            <Text className="font-medium text-xs text-white">
              {item.change}%
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CryptoCard;
