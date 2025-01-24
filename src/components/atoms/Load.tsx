import * as React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useTheme} from '../../hooks';

export const Load = () => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    containerLoad: {
      backgroundColor: theme.superface,
      position: 'absolute',
      padding: 10,
      borderRadius: 20,
      left: '50%',
      top: '3%',
    },
  });

  return (
    <View style={style.containerLoad}>
      <ActivityIndicator size="large" color={theme.load} />
    </View>
  );
};
