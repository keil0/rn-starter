import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const ColorCounter = ({ color, value, onIncrease, onDecrease } ) => {
  return <View>
    <Text>{color}</Text>
    <Button title={`Increase ${color}`} value={value} onPress={() => onIncrease()} />
    <Button title={`Decrease ${color}`} value={value} onPress={() => onDecrease()} />
  </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;
