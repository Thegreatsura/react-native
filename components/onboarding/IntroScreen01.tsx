import { View, Text, Pressable, useColorScheme } from "react-native";
import React from "react";
// import { RootStackScreenProps } from "../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { INTRO_SCREEN_00 } from "../../utils/constants";
import Artwork01 from "../ artworks/Artwork01";
import { useTheme } from "@react-navigation/native";
import ScreenIndicators from "../ScreenIndicators";
import PrimaryButton from "../PrimaryButton";
import { useRouter } from "expo-router";
import Icons from "@expo/vector-icons/MaterialIcons";
import { customColor } from "@/constants/Colors";

// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const IntroScreen01 = () => {
  const theme = useTheme();
  const router = useRouter();
  const theneMode = useColorScheme();
  return (
    <View style={{ backgroundColor: customColor.PureWhite, flex: 1 }}>
      <View
        // entering={FadeInUp.duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        <Artwork01 width={300} height={300} />
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
          {INTRO_SCREEN_00.title}
        </Text>
        <Text
          // entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: customColor.CoalBlack,
          }}
        >
          {INTRO_SCREEN_00.description}
        </Text>
        <View
        // entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={3} activeIndex={0} />
        </View>
        <View
          // entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center" }}
        >
          <PrimaryButton
            label="Next"
            onPress={() => router.replace("/screen02")}
          />
        </View>
      </View>
    </View>
  );
};

export default IntroScreen01;
