import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useCallback, useMemo } from "react";
import { AntDesign } from "@expo/vector-icons";


const CustomSelectInput = (props:any) => {
  const {
    label,
    openDropDown,
    setOpenDropDown,
    selected,
    selectedImage,
    itemSelected
  } = props;


    // memoize the value of selectedImage
  const imageSource = useMemo(() => ({ uri: selectedImage }), [selectedImage]);

  // memoize the function that toggles openDropDown
  const toggleDropDown = useCallback(
    () => setOpenDropDown((prev:any) => !prev),
    [setOpenDropDown]
  );

  console.log(openDropDown, "openDropDown")


  return (
    <>
      {label && <Text className="text-xs font-[Inter]  my-2">{label}</Text>}
      <TouchableOpacity
        className="h-14 bg-[#F8F9FB] border border-[#E5E5E7]  rounded-xl justify-center p-3 mb-5"
        onPress={() => {
          setOpenDropDown(!openDropDown);
        }}
        // onPress={toggleDropDown}
      >
        <View className="flex-row items-center justify-between">
          <Text className="font-[400] text-sm text-[#23232399]  font-[Inter] leading-[13]">
            {selected
              ? `${selected.carrier_name} - ${selected.delivery_time}`
              : `${itemSelected}`}
          </Text>
          {selected?.img ? null : (
            <View className="">
              <AntDesign name="caretdown" size={16} color="#1E1D2F" />
            </View>
          )}
          {/* {selectedImage && (
            <View className="h-[30px] w-[30px] bg-red-300 rounded-full">
              <Image
                source={{ uri: selectedImage }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          )} */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CustomSelectInput;
