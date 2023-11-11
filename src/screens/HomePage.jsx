import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import Body from '../components/Body';
import BottomBar from '../components/BottomBar';
import {colors} from '../theme/colors';

const HomePage = () => {
  return (
    <View style={styles.page}>
      <AppBar style={styles.appBar} />
      <Body style={styles.body} />
      <BottomBar style={styles.bottomBar} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    borderWidth: 2,
  },
  appBar: {
    backgroundColor: colors.appbarColor,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  body: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    backgroundColor: colors.bottomColor,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
  },
});
