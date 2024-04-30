import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Pressable,
  useColorScheme,
} from "react-native";
import React from "react";
// import { RootStackScreenProps } from "../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Artwork03 from "../components/ artworks/Artwork03";
import { LOG_IN_SCREEN } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "expo-router";
import { customColor } from "@/constants/Colors";
import SafeArea from "@/components/safe-area";
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const Login = () => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const router = useRouter();
  const themeMode = useColorScheme();

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>
      <SafeArea
        style={{
          backgroundColor: customColor.PureWhite,
          minHeight: dimensions.height,
        }}
      >
        {/* It Works! */}
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
              alignContent: "center",
              backgroundColor: customColor.FogGray,
              borderRadius: 20,
            }}
            onPress={() => router.replace("/screen02")}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={customColor.CoalBlack}
            />
          </Pressable>
        </View>

        <View
          //   entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* <Artwork03 width={240} height={240} /> */}
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
            {LOG_IN_SCREEN.title}
          </Text>
          <Text
            // entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              alignItems: "center",
              justifyContent: "center",
              color: customColor.CoalBlack,
            }}
          >
            {LOG_IN_SCREEN.description}

            <Pressable
              style={{
                marginLeft: 10,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.replace("/help")}
            >
              <AntDesign name="infocirlce" size={15} color="black" />
            </Pressable>
          </Text>

          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <View
              //   entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder="TelegramId"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: customColor.CoalBlack,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: customColor.FogGray,
                  width: "100%",
                }}
              />
              <FontAwesome
                size={24}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
                name="telegram"
                color="#2AABEE"
              />
            </View>

            <View
              //   entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder="Short Password"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: customColor.CoalBlack,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: customColor.FogGray,
                  width: "100%",
                }}
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </View>
            <View
              //   entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder="Long password"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: customColor.CoalBlack,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: customColor.FogGray,
                  width: "100%",
                }}
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </View>
            <View
            //   entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton
                label="Log In"
                onPress={() => router.replace("/(tabs)")}
              />
            </View>
          </View>
        </View>
      </SafeArea>
    </KeyboardAwareScrollView>
  );
};

export default Login;
