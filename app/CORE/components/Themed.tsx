import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View as DefaultView,
  TextInput as DefaultTextInput,
} from "react-native";
import { Text as DefaultText, Button as RNPButton } from "react-native-paper";
import { styled } from "nativewind";
import {
  ButtonProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
  PressableProps,
  TextInputProps,
} from "types/Components";
import {
  TouchableOpacity as DefaultTochableOpacity,
  Pressable as DefaultPressable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Layout from "CORE/constants/Layout";
const NativeWindTEXT = styled(DefaultText);

export function Text(props: TextProps) {
  return (
    <NativeWindTEXT
      {...props}
      style={[
        props.fontSize
          ? {
              fontSize: RFValue(props.fontSize, Layout.window.height),
              includeFontPadding: false,
              textAlignVertical: "center",
            }
          : {
              includeFontPadding: false,
              textAlignVertical: "center",
            },

        props.style,
      ]}
      className="text-app-text dark:text-dark-app-text font-Poppins-Black"
      children={props.children}
    />
  );
}

const NativeWindView = styled(DefaultView);
export function View(props: ViewProps) {
  return <NativeWindView className="bg-transparent" {...props} />;
}

type ContainerProps = ViewProps & {
  useSafeArea?: boolean;
};

const NativeWindSafeAreaView = styled(SafeAreaView);
export function Container(props: ContainerProps) {
  return props.useSafeArea ? (
    <NativeWindSafeAreaView className="bg-app-bg dark:bg-dark-app-bg h-full">
      <View {...props}>{props.children}</View>
    </NativeWindSafeAreaView>
  ) : (
    <View {...props} className="bg-app-bg dark:bg-dark-app-bg h-full">
      {props.children}
    </View>
  );
}

const NativeWindTouchableOpacity = styled(DefaultTochableOpacity);
export function TouchableOpacity(props: TouchableOpacityProps) {
  return <NativeWindTouchableOpacity {...props} />;
}
const NativeWindButton = styled(RNPButton);
export function Button(props: ButtonProps) {
  return (
    <NativeWindButton
      {...props}
      labelStyle={[
        props.labelSize
          ? {
              fontSize: RFValue(props.labelSize, Layout.window.height),
            }
          : {},
        props.labelStyle,
      ]}
    />
  );
}

const NativeWindPressable = styled(DefaultPressable);
export function Pressable(props: PressableProps) {
  return <NativeWindPressable {...props} />;
}

const NativeWindTextInput = styled(DefaultTextInput);
export function TextInput(props: TextInputProps) {
  return <NativeWindTextInput {...props} />;
}
