import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import {useTheme} from '../../hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
interface Paragraph {
  type?: 'default' | 'italic';
  textProps?: TextProps;
  children?: string;
  icon?: string;
  iconProps?: IconProps;
}

export const Paragraph = ({
  type = 'default',
  textProps,
  children,
  iconProps,
}: Paragraph) => {
  const {theme} = useTheme();

  const style = StyleSheet.create({
    text: {
      fontSize: calculateRelativeSize(2),
      color: theme.text,
      fontFamily: type === 'default' ? 'Roboto' : 'Roboto-Italic',
    },
    container: {flexDirection: 'row'},
  });

  return (
    <View style={style.container}>
      {iconProps && (
        <MaterialIcons
          size={calculateRelativeSize(2)}
          color={theme.text}
          {...iconProps}
        />
      )}
      <Text {...textProps} style={[style.text, textProps?.style]}>
        {children}
      </Text>
    </View>
  );
};
