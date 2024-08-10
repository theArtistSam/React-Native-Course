import {StyleSheet, Image, Text, View} from 'react-native';

import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/background.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>This is some text</Text>
          <Text style={styles.normalText}>This is some text</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: null,
    // height: 235,
    // resizeMode: 'cover',
  },
  textContainer: {
    position: 'relative',
    left: 24,
    bottom: 80,
  },
  boldText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 12,
    fontWeight: 'normal',
  },
});

export default HomeScreen;
