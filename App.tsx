import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from './src/screens/HomePage'
import { colors } from './src/theme/colors'

const App = () => {
  return (
  <SafeAreaView style={styles.main}>
   <HomePage/>
  </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:colors.bodyColor
  }
})