import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome to the about page!</Text>
      <Button onPress={()=>navigation.navigate("Contact")} title="Go to Contact"></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
      marginTop: 50,
      color: 'red',
      fontWeight: 'bold',
      fontSize: 40,
      padding: 10,
      textAlign: "center",
    }
  });

export default About