import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { useFonts } from "expo-font";
import { StyleSheet } from 'react-native';


export default function LoginScreen() {
    useFonts({
        'grotesk-bold' : require('./../assets/fonts/SpaceGrotesk-Bold.ttf'),
        'grotesk-regular' : require('./../assets/fonts/SpaceGrotesk-Regular.ttf'),
        'grotesk-medium' : require('./../assets/fonts/SpaceGrotesk-Medium.ttf')
    })
  return (
    <View>
        <View style={{display: 'flex', alignItems: 'center', marginTop: 100}}>
            <Image source={require('./../assets/images/login.png')}
            style={{
                width: 220,
                height: 450,
                borderRadius: 20,
                borderWidth: 5,
                borderColor: Colors.BLACK
            }}
            />
        </View>
        <View style={
            styles.subContainer
        }>
            <Text style={{
                fontFamily: 'grotesk-regular',
                fontSize: 25,
                textAlign: 'center'
            }}>
                Your Ultimate
                <Text style={{
                    color: Colors.ORANGE,
                    fontSize: 30,
                    fontFamily: 'grotesk-bold'
                }}>
                    Buisness Directory
                </Text>
                App
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        backgroundColor: Colors.light,
        padding: 20
    },
})
