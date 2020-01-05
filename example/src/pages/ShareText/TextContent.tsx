import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width: pageWidth, height: pageHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 33,
    color: '#ffffff',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 20,
  },
});

const weekBgColor = [
  ['#009CB7', '#59AFBF'],
  ['#5F00B9', '#596FBF'],
  ['#D42E2E', '#FF6161'],
  ['#003AB7', '#3372F8'],
  ['#FFBC1A', '#EEB22C'],
  ['#1AB158', '#5BD48D'],
  ['#FF6900', '#FF8E31'],
];

export default function TextContent({colors}: {colors?: [string, string]}) {
  const bgColors = colors || weekBgColor[Math.floor(Math.random() * 6)];

  return (
    <LinearGradient
      style={{
        width: pageWidth,
        minHeight: pageHeight,
      }}
      colors={bgColors}>
      <Text style={styles.title}>Math.random()</Text>
      <Text style={styles.content}>
        The Math.random() function returns a floating-point, pseudo-random
        number in the range 0–1 (inclusive of 0, but not 1) with approximately
        uniform distribution over that range — which you can then scale to your
        desired range. The implementation selects the initial seed to the random
        number generation algorithm; it cannot be chosen or reset by the user.
      </Text>
      <Text style={styles.title}>Examples</Text>
      <Text style={styles.content}>
        Note that as numbers in JavaScript are IEEE 754 floating point numbers
        with round-to-nearest-even behavior, the ranges claimed for the
        functions below (excluding the one for Math.random() itself) aren't
        exact. If extremely large bounds are chosen (253 or higher), it's
        possible in extremely rare cases to calculate the usually-excluded upper
        bound.
      </Text>
      <Text style={styles.content}>
        While the getRandomInt() function above is inclusive at the minimum,
        it's exclusive at the maximum. What if you need the results to be
        inclusive at both the minimum and the maximum? The
        getRandomIntInclusive() function below accomplishes that.
      </Text>
    </LinearGradient>
  );
}
