
import HomeScreen from "../screens/mainScreens/HomeScreen";
import UploadScreen from "../screens/mainScreens/UploadScreen";
import { HomeStackParamList } from "./navigationTypes";
// import {
//   createNativeStackNavigator,
//   BottomTabNavigationOptions,
// } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = () => {};
// const Tab = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeStackParamList>();


const MainNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ header: () => null }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="UploadScreen" component={UploadScreen} />
      </Tab.Navigator>
    </>
  );
};

export default MainNavigation;
