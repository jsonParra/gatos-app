import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../../hooks';

interface CircularBtn {
  icon: string;
  action: () => void;
  styleProp?: ViewStyle;
}

export const CircularBtn = ({icon, action, styleProp}: CircularBtn) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    pressable: {
      width: calculateRelativeSize(5),
      height: calculateRelativeSize(5),
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <Pressable
      onPress={action}
      style={({pressed}) => [
        {backgroundColor: !pressed ? theme.primary : 'red'},
        styles.pressable,
        styleProp,
      ]}>
      <FontAwesome
        name={icon}
        color={theme.superface}
        size={calculateRelativeSize(2)}
      />
    </Pressable>
  );
};
