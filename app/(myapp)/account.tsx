import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import Colors, { customColor } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import SafeArea from "@/components/safe-area";
import { useRouter } from "expo-router";
// import { getAppIcon, setAppIcon } from 'expo-dynamic-app-icon';

// const ICONS = [
//   {
//     name: "Default",
//     icon: require("@/assets/images/icon.png"),
//   },
//   {
//     name: "Dark",
//     icon: require("@/assets/images/icon-dark.png"),
//   },
//   {
//     name: "Vivid",
//     icon: require("@/assets/images/icon-vivid.png"),
//   },
// ];

const Account = () => {
  const router = useRouter();
  return (
    <BlurView
      intensity={80}
      tint={"dark"}
      style={{ flex: 1, paddingTop: 20, backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <SafeArea>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View />

          <Pressable
            onPress={router.back}
            style={{
              marginRight: 10,
            }}
          >
            <Ionicons
              name="close-outline"
              size={34}
              color={customColor.CoalBlack}
            />
          </Pressable>
        </View>
      </SafeArea>
    </BlurView>
  );
};

export default Account;
