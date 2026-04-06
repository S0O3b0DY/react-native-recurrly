import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function signIn() {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up">Create an Account</Link>
      <Link href="/">Create an Account</Link>
    </View>
  )
}