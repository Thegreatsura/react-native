import React, { useState, useCallback, useEffect } from "react";
import { ImageBackground, Pressable, View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  SystemMessage,
  IMessage,
} from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import SafeArea from "@/components/safe-area";
import { customColor } from "@/constants/Colors";

export default function Example() {
  const router = useRouter();
  const [messages, setMessages] = useState<any>([]);
  const insets = useSafeAreaInsets();
  const [text, setText] = useState("");

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "hi there",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeArea>
      <ImageBackground
        source={require("@/assets/images/pattern.png")}
        style={{
          flex: 1,
          backgroundColor: "white",
          marginBottom: insets.bottom,
        }}
      >
        <View
          //   entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            justifyContent: "space-between",
            height: 52,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              backgroundColor: customColor.FogGray,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={customColor.CoalBlack}
            />
          </Pressable>

          <Pressable
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              backgroundColor: customColor.FogGray,
              justifyContent: "center",
              alignItems: "center",
            }}
            // onPress={() => router.back()}
          >
            <MaterialIcons
              name="more-vert"
              size={24}
              color={customColor.CoalBlack}
            />
          </Pressable>
        </View>
        <GiftedChat
          messages={messages}
          onSend={(messages: any) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: "#000",
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: "#fff",
                  },
                  right: {
                    backgroundColor: "#FF4F18",
                  },
                }}
              />
            );
          }}
          bottomOffset={insets.bottom}
          onInputTextChanged={setText}
          renderSend={(props) => (
            <View
              style={{
                height: 44,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                paddingHorizontal: 14,
              }}
            >
              {text === "" && <></>}
              {text !== "" && (
                <Send
                  {...props}
                  containerStyle={{
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="send" size={24} color="#FF4F18" />
                  {/* <Ionicons name="send" color="#FF4F18" size={28} /> */}
                </Send>
              )}
            </View>
          )}
          renderInputToolbar={(props) => {
            return (
              <InputToolbar
                {...props}
                containerStyle={{
                  backgroundColor: "#F2F4F7",
                  paddingHorizontal: 5,
                }}
                renderActions={() => (
                  <View
                    style={{
                      height: 44,
                      justifyContent: "center",
                      alignItems: "center",
                      left: 5,
                    }}
                  >
                    <Ionicons name="add" color="#FF4F18" size={28} />
                  </View>
                )}
              />
            );
          }}
        />
      </ImageBackground>
    </SafeArea>
  );
}
