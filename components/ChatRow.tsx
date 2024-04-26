import Colors, { customColor } from "@/constants/Colors";
import { Link } from "expo-router";
import { FC } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

export interface ChatRowProps {
  id: string;
  from: string;
  msg: string;
  read: boolean;
  unreadCount: number;
}

const ChatRow: FC<ChatRowProps> = ({ id, from, msg, read, unreadCount }) => {
  return (
    <View>
      <Link href="/(myapp)/chat" asChild>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor={customColor.FogGray}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              paddingLeft: 20,
              paddingVertical: 10,
              backgroundColor: customColor.FogGray,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{from}</Text>
              <Text style={{ fontSize: 16, color: customColor.CoalBlack }}>
                {msg.length > 40 ? `${msg.substring(0, 40)}...` : msg}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Link>
    </View>
  );
};
export default ChatRow;
