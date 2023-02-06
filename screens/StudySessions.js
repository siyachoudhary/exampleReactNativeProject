import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StudySessions = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome to the study sessions page!</Text>
      <Button onPress={()=>navigation.navigate("Home")} title="Go to Home"></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
      marginTop: 50,
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 40,
      padding: 10,
      textAlign: "center",
    }
  });
  

export default StudySessions