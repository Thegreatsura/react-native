import { View, SafeAreaView, Text, Pressable } from "react-native";
import React from "react";
// import { RootStackScreenProps } from "../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import PrimaryButton from "../PrimaryButton";
import ScreenIndicators from "../ScreenIndicators";
import { INTRO_SCREEN_02 } from "../../utils/constants";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { customColor } from "@/constants/Colors";
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Artwork02 from "../ artworks/Artwork02";

const IntroScreen03 = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <View style={{ backgroundColor: customColor.PureWhite, flex: 1 }}>
      <View
        // entering={FadeInUp.duration(1000).springify()}
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
          onPress={() => router.replace("/screen02")}
        >
          <Ionicons name="arrow-back" size={24} color={customColor.CoalBlack} />
        </Pressable>
      </View>
      <View
        // entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        {/* <Artwork02 width={300} height={300} /> */}
      </View>
      <View style={{ padding: 24 }}>
        <Text
          // entering={FadeInDown.duration(1000).springify()}
          style={{
            fontSize: 40,
            fontWeight: "800",
            color: customColor.CoalBlack,
          }}
        >
          {INTRO_SCREEN_02.title}
        </Text>

        <Text
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: customColor.CoalBlack,
          }}
        >
          {INTRO_SCREEN_02.description}
        </Text>
        <View
        // entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={3} activeIndex={2} />
        </View>

        <View
          // entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center" }}
        >
          <PrimaryButton
            label="Next"
            onPress={() => router.replace("/login")}
          />
        </View>
      </View>
    </View>
  );
};

export default IntroScreen03;
