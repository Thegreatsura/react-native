import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import SafeArea from "@/components/safe-area";
import { customColor } from "@/constants/Colors";

const Help = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <SafeArea>
      <View
        //   entering={FadeInUp.duration(1000).springify()}
        style={{
          paddingHorizontal: 24,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{
            width: 40,
            height: 40,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.back()}
        >
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </Pressable>
      </View>
      <Text
        style={{
          textAlign: "center",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          color: theme.colors.text,
        }}
      >
        user support page
      </Text>
    </SafeArea>
  );
};

export default Help;
