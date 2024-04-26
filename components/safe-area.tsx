import { View, Text, ViewStyle, StyleProp } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeArea = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        { flex: 1, marginBottom: insets.bottom, marginTop: insets.top },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default SafeArea;
