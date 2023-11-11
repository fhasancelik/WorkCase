import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';

const CustomInput = ({inputTitle, onChangeText,value}) => {
  return (
    <TextInput
    value={value}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder={inputTitle}
      placeholderTextColor={'black'}
    />
  );
};

export default React.memo(CustomInput);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    borderRadius: 10,
  },
  input: {
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical:25,
    borderWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputColor,
  },
});
