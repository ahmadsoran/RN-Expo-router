import React from "react";
import { TextProps } from "types/Components";
import { Text } from "./Themed";
// "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
// "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
// "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
// "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
// "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
// "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
// "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
// "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
export function PoppinsRegular(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Regular" }]} />
  );
}
export function PoppinsMedium(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Medium" }]} />
  );
}
export function PoppinsSemiBold(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "Poppins-SemiBold" }]}
    />
  );
}
export function PoppinsBold(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Bold" }]} />
  );
}
export function PoppinsExtraBold(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "Poppins-ExtraBold" }]}
    />
  );
}
export function PoppinsBlack(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Black" }]} />
  );
}

export function PoppinsThin(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Thin" }]} />
  );
}
export function PoppinsLight(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Light" }]} />
  );
}
