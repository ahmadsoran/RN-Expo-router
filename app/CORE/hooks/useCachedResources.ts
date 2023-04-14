import { FontAwesome } from "@expo/vector-icons";
import { storage } from "CORE/util/storage";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const StorageColorScheme = storage.getString(
    "color_scheme"
  ) as NonNullable<ColorSchemeName>;
  const { setColorScheme } = useColorScheme();
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        if (StorageColorScheme) setColorScheme(StorageColorScheme);
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "Poppins-Regular": require("assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Medium": require("assets/fonts/Poppins-Medium.ttf"),
          "Poppins-SemiBold": require("assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Bold": require("assets/fonts/Poppins-Bold.ttf"),
          "Poppins-ExtraBold": require("assets/fonts/Poppins-ExtraBold.ttf"),
          "Poppins-Black": require("assets/fonts/Poppins-Black.ttf"),
          "Poppins-Thin": require("assets/fonts/Poppins-Thin.ttf"),
          "Poppins-Light": require("assets/fonts/Poppins-Light.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
