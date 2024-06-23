import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomButton } from '../../../custom_comp/CustomButton';
import { useGetAllResults } from '../../../api_services/homeServices/queries';
import { AntDesign } from "@expo/vector-icons";
import Spinner from 'react-native-loading-spinner-overlay';

const HomeScreen = () => {
  const [pageCurrent, setPageCurrent] = React.useState(1);
  const allResults = useGetAllResults(pageCurrent);


   const handlePreviousPage = () => {
     // Ensure pageCurrent doesn't go below 1
     setPageCurrent((prevPage) => Math.max(prevPage - 1, 1));
   };

   const handleNextPage = () => {
      if (allResults?.data?.getAllProducts?.length == 10) {
        setPageCurrent((prevPage) => prevPage + 1);
      } else {
        // Handle the case when there are no more pages
        console.log("No more pages available.");
      }
   };

  // console.log(allResults?.data, "allResults");
  return (
    <>
      <Spinner
        visible={allResults.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className="p-5 bg-white flex-1">
        <View className=" py-6 flex-row items-center justify-between">
          <Text className=" text-xl font-bold">Result List</Text>
          <View className=" flex-row">
            <TouchableOpacity onPress={handlePreviousPage}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text className="mx-3">{pageCurrent}</Text>
            <TouchableOpacity onPress={handleNextPage}>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className=" flex-1">
          {allResults?.data?.getAllProducts?.map((item: any) => (
            <View className=" flex-row  items-center my-2">
              <View className=" w-12 h-12 bg-emerald-100 rounded-xl">
                <Image
                  source={{ uri: item?.image }}
                  className="w-full h-full"
                />
              </View>
              <View className=" mx-2">
                <Text className="text-xs">{item?.name}</Text>
                <Text className="text-xs">{item?._id}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* <View className=" flex-row  justify-between">
          <View className=" flex-1">
            <CustomButton primary title="PREV" onPress={handlePreviousPage} />
          </View>
          <View className="flex-1 mx-2">
            <CustomButton primary title="NEXT" onPress={handleNextPage} />
          </View>
        </View> */}
      </View>
    </>
  );
}

export default HomeScreen