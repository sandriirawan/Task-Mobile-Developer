import { View, Text, Image } from "react-native";
import React from "react";

const CryptoCard = (props) => {
  const { data } = props;

  return (
    <View className="pb-32">
      {data.map((item, index) => (
        <View
          className="w-full h-[86px] bg-[#F0F0F04D] flex-row p-3 items-center justify-between mb-2 rounded-2xl"
          key={index}
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
        </View>
      ))}
    </View>
  );
};

export default CryptoCard;
