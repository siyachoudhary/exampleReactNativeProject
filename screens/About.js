import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>About</Text>
      <Button onPress={()=>navigation.navigate("Contact")} title="Go to Contact"></Button>
    </SafeAreaView>
  )
}

export default About