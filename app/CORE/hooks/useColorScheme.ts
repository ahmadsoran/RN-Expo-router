import { ColorSchemeName } from "react-native";
import { storage } from "CORE/util/storage";
import { useColorScheme as _useColorScheme } from "react-native";

export default function useColorScheme() {
  const StorageColorScheme = storage.getString(
    "color_scheme"
  ) as NonNullable<ColorSchemeName>;

  const colorScheme = _useColorScheme();

  return StorageColorScheme || colorScheme;
}
