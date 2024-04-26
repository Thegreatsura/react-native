import { View, Text } from 'react-native'
import React from 'react'
import IntroScreen01 from '@/components/onboarding/IntroScreen01'
import SafeArea from "@/components/safe-area"

const Page = () => {
  return (
    <SafeArea>
      <IntroScreen01 />
    </SafeArea>
  )
}

export default Page