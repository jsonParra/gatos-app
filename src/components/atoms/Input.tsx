import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from '../../hooks';

interface Input {
  textInputProps?: TextInputProps;
  inputRef?: React.RefObject<TextInput>;
}

export const Input = ({textInputProps, inputRef}: Input) => {
  const {theme} = useTheme();
  const styles = StyleSheet.create({
    input: {
      backgroundColor: theme.superface,
      color: 'red',
    },
  });

  return (
    <TextInput
      placeholderTextColor={theme.bg}
      style={styles.input}
      {...textInputProps}
      ref={inputRef}
    />
  );
};
