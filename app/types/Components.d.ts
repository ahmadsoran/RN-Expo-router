import { StyledProps } from "nativewind";
import {
  TextProps as RNPTextProps,
  ButtonProps as RNPButtonProps,
  TextInputProps as RNTextInputProps,
  IconButtonProps,
} from "react-native-paper";
import {
  ViewProps as RNViewProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
  PressableProps as RNPressableProps,
} from "react-native";

export type TextProps = StyledProps<RNPTextProps> & {
  fontSize?: number;
};
export type ButtonProps = StyledProps<RNPButtonProps> & {
  labelSize?: number;
};
export type ViewProps = StyledProps<RNViewProps>;
export type IconButtonProps = StyledProps<IconButtonProps>;
export type TouchableOpacityProps = StyledProps<RNTouchableOpacityProps>;
export type PressableProps = StyledProps<RNPressableProps>;
export type TextInputProps = StyledProps<RNTextInputProps>;
