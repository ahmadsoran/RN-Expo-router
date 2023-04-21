import { createMedia } from "@tamagui/react-native-media-driver";
import { createFont, createTamagui, createTokens } from "tamagui"; // or '@tamagui/core'

const PoppinsFont = createFont({
  family: "Poppins",
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 16,
    5: 18,
    6: 20,
    7: 24,
    8: 32,
    9: 40,
    10: 48,
    11: 56,
    12: 64,
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
  },
  weight: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native) swap out fonts by face/style
  face: {
    100: { normal: "Poppins-Thin" },
    200: { normal: "Poppins-Light" },
    300: { normal: "Poppins-Regular" },
    400: { normal: "Poppins-Medium" },
    500: { normal: "Poppins-SemiBold" },
    600: { normal: "Poppins-Bold" },
    700: { normal: "Poppins-ExtraBold" },
    800: { normal: "Poppins-Black" },
  },
});

// these keys can be different, but again we highly recommend consistency
const size = {
  0: 0,
  1: 5,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
  6: 30,
  7: 35,
  8: 40,
  9: 45,
  10: 50,
  11: 55,
  12: 60,
};

export const tokens = createTokens({
  size,
  space: { ...size, "-1": -5, "-2": -10 },
  radius: { 0: 0, 1: 3, 2: 6, 3: 12, 4: 24, 5: 48, 6: 9999 },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
    10: 1000,
  },
  color: {
    white: "#fff",
    black: "#000",
  },
});

const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: PoppinsFont,
    body: PoppinsFont,
  },
  tokens,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: tokens.color.black,
    },
    dark: {
      bg: "#111",
      color: tokens.color.white,
    },
  },

  // `@tamagui/core` doesn't provide media query capabilities out of the box
  // for native as it is de-coupled from react-native.

  // For web-only, media queries work out of the box and you can avoid the
  // `createMedia` call here by passing the media object directly.

  // If targeting React Native, add this driver and `createMedia` call.
  // `tamagui` and `config` do this for you automatically.
  media: createMedia({
    xxxxs: { maxWidth: 200 },
    gtXxXxs: { minWidth: 200 + 1 },
    xxxs: { maxWidth: 240 },
    gtXxxs: { minWidth: 240 + 1 },
    xxs: { maxWidth: 280 },
    gtXxs: { minWidth: 280 + 1 },
    xs: { maxWidth: 320 },
    gtXs: { minWidth: 320 + 1 },
    sm: { maxWidth: 640 },
    gtSm: { minWidth: 640 + 1 },
    md: { maxWidth: 768 },
    gtMd: { minWidth: 768 + 1 },
    lg: { maxWidth: 1024 },
    gtLg: { minWidth: 1024 + 1 },
  }),

  // optional:

  // add custom shorthand props
  // note: as const in important, without it you may see breaking types
  shorthands: {
    px: "paddingHorizontal",
    f: "flex",
    w: "width",
    h: "height",
    m: "margin",
    p: "padding",
    bg: "backgroundColor",
    color: "color",
    rounded: "borderRadius",
    roundedT: "borderTopRadius",
    roundedB: "borderBottomRadius",
    roundedTl: "borderTopLeftRadius",
    roundedTr: "borderTopRightRadius",
    roundedBl: "borderBottomLeftRadius",
    roundedBr: "borderBottomRightRadius",
    mx: "marginHorizontal",
    my: "marginVertical",
    fDir: "flexDirection",
    fWrap: "flexWrap",
    justify: "justifyContent",
  } as const,
});

export default config;
