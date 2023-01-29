import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button onPress={()=>navigation.navigate("About")} title="Go to About"></Button>
    </SafeAreaView>
  )
}

export default Home