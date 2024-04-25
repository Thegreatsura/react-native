import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import React from "react";
// import { RootStackScreenProps } from "../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
// import Artwork03 from "../components/artworks/Artwork03";
import { LOG_IN_SCREEN } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "expo-router";
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const Login = () => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
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
          <TouchableOpacity onPress={() => router.back()}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
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
              color: theme.colors.text,
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
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.description}

            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => router.push("/help")}>
              <AntDesign name="infocirlce" size={24} color="black" />
            </TouchableOpacity> 
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
                  color: theme.dark ? '#626D77' : theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
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
                  color: theme.dark ? '#626D77' : theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
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
                  color: theme.dark ? '#626D77' : theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
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
              <PrimaryButton label="Log In" onPress={() => router.push("/(tabs)")} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
