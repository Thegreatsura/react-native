import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import { customColor } from "@/constants/Colors";
import ChatRow from "@/components/ChatRow";
import SafeArea from "@/components/safe-area";

const chats = [
  {
    id: "1",
    from: "sura",
    msg: "Ullamco nostrud velit reprehenderit exercitation labore laboris consequat ex magna nostrud.",
    read: true,
    unreadCount: 2,
  },
  {
    id: "2",
    from: "sura",
    msg: "Ullamco nostrud velit reprehenderit exercitation labore laboris consequat ex magna nostrud.",
    read: true,
    unreadCount: 2,
  },
  {
    id: "3",
    from: "sura",
    msg: "Ullamco nostrud velit reprehenderit exercitation labore laboris consequat ex magna nostrud.",
    read: true,
    unreadCount: 2,
  },
  {
    id: "4",
    from: "sura",
    msg: "Ullamco nostrud velit reprehenderit exercitation labore laboris consequat ex magna nostrud.",
    read: true,
    unreadCount: 2,
  },
  {
    id: "5",
    from: "sura",
    msg: "Ullamco nostrud velit reprehenderit exercitation labore laboris consequat ex magna nostrud.",
    read: true,
    unreadCount: 2,
  },
];

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <SafeArea>
      <View
        style={[
          {
            backgroundColor: customColor.PureWhite,
          },
          styles.container,
        ]}
      >
        <FlatList
          style={{ paddingTop: 60 }}
          data={[...chats, ...chats, ...chats]}
          renderItem={({ item }) => <ChatRow {...item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginLeft: 90,
                height: StyleSheet.hairlineWidth,
                backgroundColor: customColor.FogGray,
              }}
            />
          )}
        />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
