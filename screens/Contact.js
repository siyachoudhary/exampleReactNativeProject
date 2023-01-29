import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Contact = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>Contact</Text>
      <Button onPress={()=>navigation.navigate("Home")} title="Go to Home"></Button>
    </SafeAreaView>
  )
}

export default Contact