import { Text, TextInput, TouchableHighlight, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate("Home");
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-medium text-xl">Login</Text>
      <View className="py-9">
        <TextInput className="w-72 border-b-2" placeholder="Email" />
      </View>
      <View className="pb-9">
        <TextInput className="w-72 border-b-2" placeholder="Password" />
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
