import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Mainscreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>devfinder</Text>
    </View>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6F8FF',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  text: {
    color: '#2B3442',
    fontSize: 24,
  },
});
