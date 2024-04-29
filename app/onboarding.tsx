import { useRouter } from "expo-router";
import { Image } from "react-native";
import { OnboardFlow } from "react-native-onboard";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

const Onboard = () => {
  const router = useRouter();
  return (
    <Onboarding
      onSkip={() => router.push("/(tabs)/")}
      // onDone
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <LottieView
              source={require("../assets/lottie/into_1.json")}
              autoPlay
              loop
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/logo_vid.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/logo_vid.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};
export default Onboard;
