import { View, Text } from "react-native";
import React from "react";
import IntroScreen02 from "@/components/onboarding/IntroScreen02";
import SafeArea from "@/components/safe-area";

const Page = () => {
  return (
    <SafeArea>
      <IntroScreen02 />
    </SafeArea>
  );
};

export default Page;
