import { Image } from "react-native";
import { OnboardFlow } from "react-native-onboard";
import {
  INTRO_SCREEN_00,
  INTRO_SCREEN_01,
  INTRO_SCREEN_02,
} from "@/utils/constants";

const Onboard = () => {
  return (
    <OnboardFlow
      pages={[
        {
          title: INTRO_SCREEN_00.title,
          subtitle: INTRO_SCREEN_00.description,
          imageUri: Image.resolveAssetSource(
            require("../assets/images/icon.png")
          ).uri,
        },
        {
          title: INTRO_SCREEN_01.title,
          subtitle: INTRO_SCREEN_01.description,
          imageUri: Image.resolveAssetSource(
            require("../assets/images/icon.png")
          ).uri,
        },
        {
          title: INTRO_SCREEN_02.title,
          subtitle: INTRO_SCREEN_02.description,
          imageUri: Image.resolveAssetSource(
            require("../assets/images/icon.png")
          ).uri,
        },
      ]}
    />
  );
};

export default Onboard;
