const tintColorLight = "#f58724";
const tintColorDark = "#F7A153";

const Colors = {
  light: {
    text: "#1A202C",
    background: "#F7FAFC",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    button: "#f58724",
    bgHover: "#a8a8a830",
    errorBg: "#dc143c",
    successBg: "#228b22",
    focoused: "#a8a8a8a8",
    lightBg: "#edf2f7",
    borderColor: "#cbd5e0",
  },
  dark: {
    text: "#ffffffeb",
    background: "#171923",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    button: "#F7A153",
    bgHover: "#a8a8a830",
    errorBg: "#800000",
    successBg: "#006400",
    focoused: "#a8a8a8a8",
    lightBg: "#1A202C",
    borderColor: "#2d3748",
  },
} as const;

export default {
  light: Colors.light,
  dark: Colors.dark,
};
