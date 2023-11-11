import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CustomButton = ({onPress,buttonTitle}) => {
  return (
  <TouchableOpacity onPress={onPress} style={styles.buttonBody} >
    <Text style={styles.buttonTitle}>{buttonTitle}</Text>
  </TouchableOpacity>
  )
}

export default  React.memo(CustomButton)

const styles = StyleSheet.create({
buttonBody:{
  backgroundColor:colors.buttonColor,
  paddingHorizontal:20,
  paddingVertical:10,
  borderWidth:2
}

})