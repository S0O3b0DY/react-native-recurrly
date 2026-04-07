import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { styled } from "nativewind"
 
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold">Home</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4 font-sans-bold">Go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4 font-sans-bold">Go to sign in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4 font-sans-bold">Go to sign up</Link>

    </SafeAreaView>
  )
}