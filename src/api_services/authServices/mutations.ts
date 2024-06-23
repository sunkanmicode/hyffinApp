import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { authUsersLogin, loginWithGoogle, registerUser } from ".";

export const useLoginUseMutation = (setIsLoggedIn: any) => {
  return useMutation({
    mutationFn: authUsersLogin,
    onSuccess(data: any) {
    //   console.log(data, "SUCCESSlOGIN");
      // setIsLoggedIn(true);
      Toast.show({
        type: "success",
        text2: `Login successful`,
      });
        setIsLoggedIn(true);
    },
    onError(error: any) {
      console.log(error);
      if (error?.customData) {
        Toast.show({
          type: "error",
          //   text2: error?.response?.data?.message,
          text2: error?.customData?._tokenResponse?.error?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
    },
  });
};

export const useRegisterMutation = (navigation: any) => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess(data: any) {
        console.log(data, "REGISTERlOGIN");
      // setIsLoggedIn(true);
      Toast.show({
        type: "success",
        text2: `Registered successful`,
      });
    //   setIsLoggedIn(true);
    navigation.navigate("LoginScreen")
    },
    onError(error: any) {
      console.log(error);
      if (error?.customData) {
        Toast.show({
          type: "error",
          text2: error?.customData?._tokenResponse?.error?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
    },
  });
};


export const useGoogleLoginutation = (setIsLoggedIn: any) => {
  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess(data: any) {
        console.log(data, "GOOGLElOGIN");
      // setIsLoggedIn(true);
      Toast.show({
        type: "success",
        text2: `Login successful`,
      });
    //   setIsLoggedIn(true);
    },
    onError(error: any) {
      console.log(error);
      if (error?.response) {
        Toast.show({
          type: "error",
          text2: error?.response?.data?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
    },
  });
};
