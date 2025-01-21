import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";
import images from "@/constants/images";

import Search from "@/components/Search";
import Filters from "@/components/Filters";
//import NoResults from "@/components/NoResults";
import { Card, FeatureCards } from "@/components/Cards";

import { useAppwrite } from "@/lib/useAppwrite";
import { useGlobalContext } from "@/lib/global-provider";
//import { getLatestProperties, getProperties } from "@/lib/appwrite";


export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning,
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Troy
            </Text>
            </View>
          </View>
            <Image source={icons.bell} className="size-6"/>
        </View>
        <Search />
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-5 mt-5">
            <FeatureCards />
            <FeatureCards />
            <FeatureCards />
          </View>
          </View>

          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>

          <Filters />

          <View className="flex flex-row gap-5 mt-5">
            <Card />
            <Card />
          </View>
        
      </View>
      
    </SafeAreaView>
  );
}
