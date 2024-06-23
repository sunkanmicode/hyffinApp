import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../../../custom_comp/CustomInput';
import { CustomButton } from '../../../custom_comp/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS_ONLY = /^[a-zA-Z\s]+$/;

const LoginScreen = () => {
  const navigation =useNavigation()

   const { control, handleSubmit, formState, watch } = useForm();

   const onSubmit = (data: any) => {
     console.log(data);
   };
  return (
    <View className=" flex-1 bg-white p-5">
      <View className="py-5">
        <Text className=" self-center font-bold text-lg ">Sign in</Text>
        <Text className=" self-center font-normal text-xs ">
          Welcome to Hyffin Home
        </Text>
      </View>
      <View className="flex-1 my-10">
        <Controller
          control={control}
          name="email"
          rules={{
            required: "email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Email is invalid",
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <CustomInput
              primary
              label="Email"
              placeholder="Enter your email"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <CustomInput
              primary
              label="Password"
              placeholder="Enter your password"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />
        <CustomButton primary title="login" onPress={handleSubmit(onSubmit)} />
        <View className=" self-center my-10">
          <Text>
            Dont have an Account?{" "}
            <Text
              className=" font-bold"
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen