import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Rating} from '../atoms/';

interface RatingCard {
  length: number;
  text: string;
}

export const RatingCards = ({length, text}: RatingCard) => {
  const styles = StyleSheet.create({
    ratingCard: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.ratingCard}>
      <Paragraph>{text}</Paragraph>
      <Rating length={length} />
    </View>
  );
};
