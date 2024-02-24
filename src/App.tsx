import {Image, ImageSourcePropType, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import DiceOne from "./assets/One.png";
import DiceTwo from "./assets/Two.png";
import DiceThree from "./assets/Three.png";
import DiceFour from "./assets/Four.png";
import DiceFive from "./assets/Five.png";
import DiceSix from "./assets/Six.png";
import { useState } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceImageProps = {
  imageSource: ImageSourcePropType
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const getDiceImages = [DiceOne,DiceTwo,DiceThree,DiceFour,DiceFive,DiceSix]

const DiceImage = ({imageSource}: DiceImageProps) => {
  return (
    <View>
      <Image source={imageSource} style={styles.diceImage} />
    </View>
  )
}

export default function App() {
  const [diceImageIndex,setDiceImageIndex] = useState(0)

  const onRollDicePress = () => {
    const index = Math.floor(Math.random() * 5) + 1
    setDiceImageIndex(index)
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DiceImage imageSource={getDiceImages[diceImageIndex]} />
        <Pressable onPress={onRollDicePress} >
          <Text style={styles.rollDiceText} >Roll Dice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2F363F",
    height: "100%"
  },

  text: {
    color: "red"
  },
  diceImage: {
    width: 200,
    height: 200
  },
  rollDiceText: {
    textAlign: "center",
    paddingVertical: 10,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 6,
    fontSize: 23,
    color: "#2C3335",
    fontWeight: "600"
  }
});
