import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
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
  return (
    <BlurView
      intensity={50}
      tint={"dark"}
      style={{ flex: 1, paddingTop: 100, backgroundColor: "rgba(0,0,0,0.5)" }}
    ></BlurView>
  );
};

export default Account;
