import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const CustomButtom = ({text, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center', // Center the text inside the button
  },
});

export default CustomButtom;
