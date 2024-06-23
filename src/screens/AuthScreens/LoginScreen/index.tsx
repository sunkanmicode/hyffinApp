import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInput from '../../../custom_comp/CustomInput';
import { CustomButton } from '../../../custom_comp/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import Spinner from "react-native-loading-spinner-overlay";
import { useGoogleLoginutation, useLoginUseMutation } from '../../../api_services/authServices/mutations';
import useAuthStore from '../../../stores/authStore';
import { loginWithGoogle } from '../../../api_services/authServices';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS_ONLY = /^[a-zA-Z\s]+$/;

const LoginScreen = () => {
  const navigation = useNavigation();

  //useForm
  const { control, handleSubmit, formState, watch } = useForm();

  //STORE
  const { setIsLoggedIn } = useAuthStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
  }));

  const onSubmit = (data: any) => {
    userLogin.mutate(data);
  };

  //hooks
  const userLogin = useLoginUseMutation(setIsLoggedIn);
  const googleLogin = useGoogleLoginutation(setIsLoggedIn);

  // console.log(googleLogin, "googleLogin")

  return (
    <>
      <Spinner
        visible={userLogin.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />

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
                secureTextEntry
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />
          <CustomButton
            primary
            title="login"
            onPress={handleSubmit(onSubmit)}
          />
          <View className=" self-center my-10">
            {/* <TouchableOpacity
              className="my-5"
              onPress={() => {
                // googleLogin.mutate();
                loginWithGoogle()
              }}
            >
              <Text>Google</Text>
            </TouchableOpacity> */}
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
    </>
  );
}

export default LoginScreen