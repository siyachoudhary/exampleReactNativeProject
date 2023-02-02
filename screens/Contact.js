import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Contact = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome to the contact page!</Text>
      <Button onPress={()=>navigation.navigate("Home")} title="Go to Home"></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
      marginTop: 50,
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 40,
      padding: 10,
      textAlign: "center",
    }
  });

export default Contact