import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../hooks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
interface Rating {
  length: number;
}

export const Rating = ({length}: Rating) => {
  const {theme} = useTheme();

  return (
    <View style={style.Rating}>
      {new Array(5).fill(null).map((_, index) => (
        <FontAwesome
          name="heart"
          key={index}
          color={length > index ? theme.rating : theme.gray}
          size={calculateRelativeSize(2)}
        />
      ))}
    </View>
  );
};
const style = StyleSheet.create({
  Rating: {flexDirection: 'row'},
});
