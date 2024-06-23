import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomInput from "../../../custom_comp/CustomInput";
import { CustomButton } from "../../../custom_comp/CustomButton";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <View className=" flex-1 bg-white p-5">
      <View className="py-5">
        <Text className=" self-center font-bold text-lg ">Sign up</Text>
        <Text className=" self-center font-normal text-xs ">
          Welcome to Hyffin Home
        </Text>
      </View>
      <ScrollView className="flex-1 my-10">
        <CustomInput primary label="Name" placeholder="Enter your name" />
        <CustomInput
          primary
          label="Phone Number"
          placeholder="Enter your Phone Number"
        />
        <CustomInput primary label="Email" placeholder="Enter your email" />
        <CustomInput
          primary
          label="Password"
          placeholder="Enter your password"
        />

        <CustomButton primary title="login" />
        <View className=" self-center my-10">
          <Text>
            Have an Account? <Text className=" font-bold" onPress={()=>{
              navigation.navigate("LoginScreen")
            }}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
