import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import {useTheme} from '../../hooks';

interface Title {
  type?: 'Title' | 'Subtitle';
  textProps?: TextProps;
  children?: React.ReactNode;
}

export const Title = ({textProps, type = 'Title', children}: Title) => {
  const {theme} = useTheme();

  const style = StyleSheet.create({
    text: {
      fontSize: calculateRelativeSize(type === 'Title' ? 5 : 3),

      fontFamily: 'Pacifico-Regular',
      color: type === 'Title' ? theme.primary : theme.secundary,
    },
  });
  return (
    <Text {...textProps} style={[style.text, textProps?.style]}>
      {children}
    </Text>
  );
};
