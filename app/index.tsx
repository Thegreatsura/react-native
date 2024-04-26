import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { useColorScheme } from "@/components/useColorScheme";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/utils/wp";
import { customColor } from "@/constants/Colors";
import SafeArea from "@/components/safe-area";
import { useTheme } from "@react-navigation/native";

const Index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const theme = useTheme();

  const onNavigation = () => {
    router.push("/screen01");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("@/assets/images/home.png")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={{ flex: 1 }} />
        <View style={styles.intro}>
          <Text style={[styles.punchline, { color: customColor.CoalBlack }]}>
            Made In Ethiopia
          </Text>
        </View>
        <PrimaryButton
          onPress={onNavigation}
          label="Get started"
          style={styles.button}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: wp(100),
    height: hp(100),
  },
  button: {
    color: "dark",
    fontSize: 42,
    fontWeight: "bold",
    margin: 15,
  },
  intro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    fontWeight: "bold",
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 4,
    fontWeight: "normal",
  },
});
export default Index;
