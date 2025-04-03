import "../styles/global.css";

import { useFonts, OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
  const [ loaded ] = useFonts({ OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold });

  if (loaded) {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
