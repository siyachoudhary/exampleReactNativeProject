import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome to the home page!</Text>
      <Button onPress={()=>navigation.navigate("About")} title="Go to About"></Button>
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
  

export default Home