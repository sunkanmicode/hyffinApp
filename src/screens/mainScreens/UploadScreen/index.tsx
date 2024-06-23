import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../../../custom_comp/BottomSheet";
import AddItem from "./AddItem";

const UploadScreen = () => {
  const navigation = useNavigation();

  const [isAdded, setIsAdded] = useState(false);
  const SheetRef = React.useRef<null | any>(null);

  const height = 750;

  const closeSheet = () => {
    if (SheetRef.current) {
      SheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (SheetRef.current) {
      SheetRef.current.open();
    }
  };
  return (
    <>
      <View className="p-5 bg-white flex-1">
        <View className=" py-6">
          <Text className=" text-xl font-bold">Add item </Text>
        </View>
        {!!isAdded ? (
          <View className=" flex-1 items-center justify-center">
            <Text>No Item here yet....</Text>
          </View>
        ) : (
          <ScrollView>
            <View className=" flex-1 flex-row gap-5">
              <TouchableOpacity
                className="flex-1 h-40 bg-slate-100 "
                onPress={() => {
                  navigation.navigate("ItemDetails");
                }}
              >
                <View className=" w-full  h-1/2">
                  <Image
                    source={require("../../../../assets/blank.jpg")}
                    className="w-full h-full rounded-t-lg"
                  />
                </View>
                <View className=" bg-slate-100  max-h-20 ">
                  <Text className=" font-semibold text-[10px] p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    ipsam rerum maiores, possimus, magni nesciunt reiciendis
                    perspiciatis ullam similique veritatis illo id vitae nemo
                    cumque voluptatum sapiente inventore numquam quaerat!
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 h-40 bg-slate-100 ">
                <View className=" w-full  h-1/2">
                  <Image
                    source={require("../../../../assets/blank.jpg")}
                    className="w-full h-full rounded-t-lg"
                  />
                </View>
                <View className=" bg-slate-100  max-h-20 ">
                  <Text className=" font-semibold text-[10px] p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    ipsam rerum maiores, possimus, magni nesciunt reiciendis
                    perspiciatis ullam similique veritatis illo id vitae nemo
                    cumque voluptatum sapiente inventore numquam quaerat!
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}

        <TouchableOpacity
          className=" absolute bottom-5 right-5 bg-teal-700 w-20 h-20 rounded-full items-center justify-center"
          onPress={() => {
            openSheet();
          }}
        >
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
      
      <CustomBottomSheet
        closeOnDragDown={true}
        height={height}
        ref={SheetRef}
        message={<AddItem closeSheet={closeSheet} />}
      />
    </>
  );
};

export default UploadScreen;
