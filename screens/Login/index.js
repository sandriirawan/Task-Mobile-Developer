import { Text, TextInput, TouchableHighlight, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = () => {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate("Home");
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-medium text-xl">Login</Text>
      <View className="py-9 flex-row items-center space-x-2">
        <FeatherIcon
          name="user"
          size={20}
          style={{ position: "absolute", left: 6, top: 40 }}
        />
        <TextInput
          className="w-72 border-b-2 pl-6 "
          placeholder="Email"
          inputMode="email"
        />
      </View>
      <View className="pb-9 flex-row items-center space-x-2 relative">
        <Ionicons
          name="key-outline"
          size={20}
          style={{ position: "absolute", left: 6, top: 3 }}
        />
        <TextInput
          className="w-72 border-b-2 pl-6"
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableHighlight
        className="w-52 h-9 bg-[#A172FB] justify-center items-center rounded-[20px]"
        underlayColor="#8B5CE1"
        onPress={onPressButton}
      >
        <Text className="text-white font-normal text-xs">Masuk ke Akun</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
