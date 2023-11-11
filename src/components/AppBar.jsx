import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from './Title';
import {colors} from '../theme/colors';

const AppBar = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.appBarTitle}>Header</Text>
    </View>
  );
};

export default React.memo(AppBar);

const styles = StyleSheet.create({
  appBarTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
});
