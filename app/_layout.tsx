import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "@/components/useColorScheme";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "Index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="help"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="screen01" options={{ headerShown: false }} />
        <Stack.Screen name="screen02" options={{ headerShown: false }} />
        <Stack.Screen
          name="(myapp)/account"
          options={{
            presentation: "transparentModal",
            animation: "fade",
            title: "",
            headerTransparent: true,
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity onPress={router.back} style={{ margin: 30 }}>
                <Ionicons name="close-outline" size={34} color={"#fff"} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="(myapp)/chat" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
