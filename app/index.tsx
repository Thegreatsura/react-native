import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { useColorScheme } from "@/components/useColorScheme";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/utils/wp";
import { customColor } from "@/constants/Colors";

const Index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const onNavigation = () => {
    router.push("/screen01");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/home.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.below} />
      <PrimaryButton
        onPress={onNavigation}
        label="Get started"
        style={styles.button}
      />
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
    justifyContent: "center",
    width: wp(100),
    height: hp(100),
    backgroundColor: customColor.PureWhite,
  },
  button: {
    color: "dark",
    fontSize: 42,
    fontWeight: "bold",
    margin: 15,
  },
  below: {
    flex: 1,
    backgroundColor: customColor.PureWhite,
  },
});
export default Index;
