import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function singUp() {
  return (
    <View>
      <Text>singUp</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>
    </View>
  )
}