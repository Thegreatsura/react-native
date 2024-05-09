import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@react-navigation/native";
import SafeArea from "@/components/safe-area";
import { Ionicons } from "@expo/vector-icons";
import { customColor } from "@/constants/Colors";

const Help = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <SafeArea style={{ backgroundColor: customColor.PureWhite }}>
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
            borderRadius: 30,
            backgroundColor: customColor.FogGray,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.replace("/login")}
        >
          <Ionicons name="arrow-back" size={24} color={customColor.CoalBlack} />
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
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Pressable
          style={{
            width: 40,
            height: 40,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.push("/onboarding")}
        >
          <Text style={{ color: customColor.CoalBlack }}>onboarding</Text>
        </Pressable>
        <Pressable
          style={{
            width: 40,
            height: 40,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.push("/onboard")}
        >
          <Text style={{ color: customColor.CoalBlack }}>onboard</Text>
        </Pressable>
      </View>
    </SafeArea>
  );
};

export default Help;
