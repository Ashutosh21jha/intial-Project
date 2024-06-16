import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import home from './home';
import iconSet from '@expo/vector-icons/build/Fontisto';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
        <Tabs.Screen name = 'home'
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color}) => <FontAwesome5 name="home" size={24} color={color} />
        }
        }/>
        <Tabs.Screen name = 'explore' options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({color})=><MaterialIcons name="explore" size={24} color={color} />
        }}/>
        <Tabs.Screen name = 'profile' options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({color})=><MaterialCommunityIcons name="account" size={24} color={color} />
        }}/>
    </Tabs>
  );
}