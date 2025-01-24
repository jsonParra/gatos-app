import React, {useRef, useState} from 'react';
import {Input} from '../atoms';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {useTheme} from '../../hooks';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Search {
  onEndEditing: (Inputvalue: string) => void;
  valueState: string;
}

export const Search = ({onEndEditing, valueState}: Search) => {
  const [value, setValue] = useState(valueState);
  const inputRef = useRef<TextInput>(null);
  const {theme} = useTheme();
  const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      width: '90%',
      height: calculateRelativeSize(6),
      flexDirection: 'row',
      backgroundColor: 'white',
      alignSelf: 'center',
    },
    iconContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      flex: 0.12,
    },
  });

  const handleIconPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleIconPress} style={styles.iconContainer}>
        <FontAwesome
          name="search"
          color={theme.gray}
          size={calculateRelativeSize(2)}
        />
      </Pressable>
      <Input
        inputRef={inputRef}
        textInputProps={{
          placeholder: 'Buscar raza',
          value,
          onChangeText: setValue,
          onEndEditing: () => onEndEditing(value),
          style: {flex: 1},
        }}
      />
    </View>
  );
};
