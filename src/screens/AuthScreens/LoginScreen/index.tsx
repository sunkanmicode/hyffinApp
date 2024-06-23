import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../../../custom_comp/CustomInput';
import { CustomButton } from '../../../custom_comp/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation =useNavigation()
  return (
    <View className=" flex-1 bg-white p-5">
      <View className="py-5">
        <Text className=" self-center font-bold text-lg ">Sign in</Text>
        <Text className=" self-center font-normal text-xs ">Welcome to Hyffin Home</Text>
      </View>
      <View className="flex-1 my-10">
        <CustomInput primary label="Email" placeholder="Enter your email" />
        <CustomInput
          primary
          label="Password"
          placeholder="Enter your password"
        />
        <CustomButton primary title="login" />
        <View className=" self-center my-10">
          <Text>
            Dont have an Account? <Text className=" font-bold" onPress={()=>{
              navigation.navigate("RegisterScreen")
            }}>Register</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen