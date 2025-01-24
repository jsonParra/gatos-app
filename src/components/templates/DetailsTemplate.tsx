import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Load, Picture} from '../atoms/';
import {useTheme} from '../../hooks';
import {cat as ICat} from '../../redux/slices/cats/catSlice';
import {AboutCat} from '../organisms/AboutCat';

interface DetailsTemplate {
  cat?: ICat;
}

export const DetailsTemplate = ({cat}: DetailsTemplate) => {
  const {theme} = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const styles = StyleSheet.create({
    containerTemplate: {
      backgroundColor: theme.bg,
      paddingHorizontal: 30,
      flex: 1,
      display: 'flex',
    },
    containerPinture: {
      flex: 0.7,
    },
    containerAbout: {flex: 1},
    containerFullScreen: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <View style={styles.containerTemplate}>
      {cat?.id && (
        <>
          <Pressable
            onPress={() => setIsFullScreen(!isFullScreen)}
            style={
              !isFullScreen
                ? styles.containerPinture
                : styles.containerFullScreen
            }>
            <Picture
              props={{resizeMode: !isFullScreen ? 'cover' : 'contain'}}
              src={cat.image?.url}
            />
          </Pressable>
          <View style={styles.containerAbout}>
            <AboutCat cat={cat} />
          </View>
        </>
      )}

      {!cat?.id && <Load />}
    </View>
  );
};
