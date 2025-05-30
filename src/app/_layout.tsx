import "../styles/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
