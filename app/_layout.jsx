import { Stack } from "expo-router";
import {Colors} from "../constants/Colors"
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text } from "react-native";
import LoginScreen from "./../components/LoginScreen"

export default function RootLayout(){
  useFonts({
    'grotesk-bold' : require('./../assets/fonts/SpaceGrotesk-Bold.ttf'),
    'grotesk-regular' : require('./../assets/fonts/SpaceGrotesk-Regular.ttf'),
    'grotesk-medium' : require('./../assets/fonts/SpaceGrotesk-Medium.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
          headerShown:false,
          navigationBarColor: Colors.BLACK
          }}>
            <Stack.Screen name = "(tabs)"/>
          </Stack>
      </SignedIn>
      <SignedOut>
        <Text style={{fontSize: 30}}>LoginScreen</Text>
      </SignedOut>
      
    </ClerkProvider>
  );
}