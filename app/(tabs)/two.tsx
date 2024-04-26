import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { customColor } from "@/constants/Colors";

export default function TabTwoScreen() {
  return (
    <View
      style={[{ backgroundColor: customColor.PureWhite }, styles.container]}
    >
      <Text style={styles.title}> Settings 📱</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
