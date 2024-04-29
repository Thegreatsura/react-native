import { View, SafeAreaView, Text, Pressable } from "react-native";
import React from "react";
// import { RootStackScreenProps } from "../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import PrimaryButton from "../PrimaryButton";
import ScreenIndicators from "../ScreenIndicators";
import { INTRO_SCREEN_02 } from "../../utils/constants";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { customColor } from "@/constants/Colors";
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Artwork02 from "../ artworks/Artwork02";

const IntroScreen02 = () => {
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
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.replace("/screen01")}
        >
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </Pressable>
      </View>
      <View
        // entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        <Artwork02 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text
          // entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: "800", color: theme.colors.text }}
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
          <ScreenIndicators count={2} activeIndex={1} />
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

export default IntroScreen02;
