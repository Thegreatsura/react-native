import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

const Help = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View>
      <View
        //   entering={FadeInUp.duration(1000).springify()}
        style={{
          paddingHorizontal: 24,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </Pressable>
      </View>
      <Text
        style={{
          textAlign: "center",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        user support page
      </Text>
    </View>
  );
};

export default Help;
