import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

export default function SubscriptionsDetails() {
  const { id } = useLocalSearchParams<{ id: string }>() 

  return (
    <View>
      <Text>SubscriptionsDetails: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}