import Colors, { customColor } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView intensity={80} tint={"extraLight"} style={{ paddingTop: top }}>
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
            backgroundColor: "transparent",
          },
        ]}
      >
        <View style={styles.circle}>
          <Ionicons name={"card"} size={20} color={customColor.CoalBlack} />
        </View>

        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={20}
            color={customColor.CoalBlack}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={customColor.CoalBlack}
          />
        </View>
        <Link href={"/(myapp)/account"} asChild>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: customColor.FogGray,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: customColor.RadiantOrange,
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              SG
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchSection: {
    color: customColor.CoalBlack,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: customColor.FogGray,
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    backgroundColor: customColor.FogGray,
    color: customColor.CoalBlack,
    borderRadius: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: customColor.FogGray,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomHeader;
