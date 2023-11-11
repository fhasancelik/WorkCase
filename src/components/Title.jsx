import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const Title = () => {
  return (
    <View style={styles.titleBackground}>
      <Text style={styles.title}>Title</Text>
    </View>
  )
}

export default React.memo(Title)

const styles = StyleSheet.create({
  titleBackground:{
    backgroundColor:colors.titleBackgroundColor,
    alignItems:'center',
    paddingVertical:10,

  },
  title:{
    fontWeight:'bold',
    color:colors.titleColor
  }
})