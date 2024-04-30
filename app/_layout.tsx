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
        <Stack.Screen
          name="index"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false, presentation: "containedModal" }}
        />
        <Stack.Screen
          name="screen01"
          options={{ headerShown: false, presentation: "formSheet" }}
        />
        <Stack.Screen
          name="screen02"
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="screen03"
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="(myapp)/account"
          options={{
            headerShown: false,
            presentation: "transparentModal",
            animation: "fade",
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="(myapp)/chat"
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="onboard" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
