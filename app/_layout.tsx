import { Stack } from "expo-router";
import {Colors} from "./../constants/Colors"

export default function RootLayout(){
  return (
    <Stack screenOptions={{
      headerShown:false,
      navigationBarColor: Colors.BLACK
    }}>
      <Stack.Screen name = "(tabs)"/>
    </Stack>
  );
}