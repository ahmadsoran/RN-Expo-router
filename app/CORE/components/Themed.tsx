import React from "react";
import Colors from "CORE/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
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
import useColorScheme from "CORE/hooks/useColorScheme";
import Layout from "CORE/constants/Layout";
const NativeWindTEXT = styled(DefaultText);

export function Text(props: TextProps) {
  const colorScheme = useColorScheme();

  return (
    <NativeWindTEXT
      {...props}
      style={[
        props.fontSize
          ? {
              color: Colors[colorScheme].text,
              fontSize: RFValue(props.fontSize, Layout.window.height),
              includeFontPadding: false,
              textAlignVertical: "center",
            }
          : {
              color: Colors[colorScheme].text,
              includeFontPadding: false,
              textAlignVertical: "center",
            },

        props.style,
      ]}
    />
  );
}

const NativeWindView = styled(DefaultView);
export function View(props: ViewProps) {
  return <NativeWindView style={styles.View} {...props} />;
}

type ContainerProps = ViewProps & {
  useSafeArea?: boolean;
};
export function Container(props: ContainerProps) {
  const colorScheme = useColorScheme();

  return props.useSafeArea ? (
    <SafeAreaView
      style={[
        props.style,
        {
          height: "100%",

          backgroundColor: Colors[colorScheme].background,
        },
      ]}>
      <View {...props}>{props.children}</View>
    </SafeAreaView>
  ) : (
    <View
      {...props}
      style={[
        props.style,
        {
          height: "100%",

          backgroundColor: Colors[colorScheme].background,
        },
      ]}>
      {props.children}
    </View>
  );
}

type CetnerProps = ViewProps & {
  horizontal?: boolean;
  vertical?: boolean;
};

export function Center(props: CetnerProps) {
  const { horizontal, vertical } = props;

  return (
    <View
      {...props}
      style={[
        props.style,
        horizontal && { justifyContent: "center" },
        vertical && { alignContent: "center" },
        {
          display: "flex",
          flexDirection: "row",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: "transparent",
    padding: 10,
  },
});

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
