import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import {
  INTRO_SCREEN_00,
  INTRO_SCREEN_01,
  INTRO_SCREEN_02,
} from "@/utils/constants";
import { View } from "@/components/Themed";
import SafeArea from "@/components/safe-area";
import { customColor } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const Onboard = () => {
  const router = useRouter();

  const onDone = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeArea style={{ backgroundColor: customColor.PureWhite }}>
      <Onboarding
        onSkip={onDone}
        onDone={onDone}
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: "#C47A62",
            image: (
              <View style={styles.container}>
                <Image source={require("../assets/images/logo_vid.png")} />
              </View>
            ),
            title: INTRO_SCREEN_00.title,
            subtitle: INTRO_SCREEN_00.description,
          },
          {
            backgroundColor: "#F7EC5",
            image: (
              <View style={styles.container}>
                <Image source={require("../assets/images/logo_vid.png")} />
              </View>
            ),
            title: INTRO_SCREEN_01.title,
            subtitle: INTRO_SCREEN_01.description,
          },
          {
            backgroundColor: "#633F3B",
            image: (
              <View style={styles.container}>
                <Image source={require("../assets/images/logo_vid.png")} />
              </View>
            ),
            title: INTRO_SCREEN_02.title,
            subtitle: INTRO_SCREEN_02.description,
          },
        ]}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: width,
  },
});
export default Onboard;
