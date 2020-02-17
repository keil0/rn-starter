import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return <View>
    <ColorCounter color='Red' value={red} onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red - COLOR_INCREMENT)} />
    <ColorCounter color='Green' value={green} onIncrease={() => setGreen(green + COLOR_INCREMENT)} onDecrease={() => setGreen(green - COLOR_INCREMENT)} />
    <ColorCounter color='Blue' value={blue} onIncrease={() => setBlue(blue + COLOR_INCREMENT)} onDecrease={() => setBlue(blue - COLOR_INCREMENT)} />
    <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
  </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;
