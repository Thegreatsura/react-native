import { Text, ViewStyle, StyleProp, TextStyle, Pressable } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { customColor } from "@/constants/Colors";

const PrimaryButton = ({
  onPress,
  label,
  style,
  labelStyle,
}: {
  onPress?: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  const theme = useTheme();
  return (
    <Pressable
      style={[
        {
          backgroundColor: customColor.RadiantOrange,
          paddingHorizontal: 32,
          height: 52,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          { fontSize: 25, fontWeight: "600", color: theme.colors.background },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
