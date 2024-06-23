import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton } from '../../../custom_comp/CustomButton';

const HomeScreen = () => {
  return (
    <View className="p-5 bg-white flex-1">
      <View className=" py-6">
        <Text>Result List</Text>
      </View>
      <View className=" flex-1">
        <View className=" flex-row  items-center">
          <View className=" w-20 h-20 bg-emerald-100 rounded-xl"></View>
          <View className=" ">
            <Text>ResultId</Text>
            <Text>Name of the List</Text>
          </View>
        </View>
      </View>
      <View className=" flex-row  justify-between">
        <View className=' flex-1'>
          <CustomButton primary title="PREV" />
        </View>
        <View className='flex-1 mx-2'>
          <CustomButton primary title="NEXT" />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen