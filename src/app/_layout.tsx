import "../styles/global.css";

import { useFonts, OpenSans_400Regular, OpenSans_500Medium } from "@expo-google-fonts/open-sans";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

export default function Layout() {
  const [ loaded ] = useFonts({ OpenSans_400Regular, OpenSans_500Medium });

  if (loaded) {
    SplashScreen.hideAsync();
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}
