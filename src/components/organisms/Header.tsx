import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CircularBtn, Title} from '../atoms';
import {Search} from '../molecules';

import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import {
  useOrientation,
  useRedux,
  GenericRouteProp,
  useScreensNavigation,
  useTheme,
} from '../../hooks';
import {useRoute} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
export const Header = ({}: NativeStackHeaderProps) => {
  const {theme} = useTheme();
  useOrientation();
  const {orientation} = useRedux();
  const {handleSetSearch, handleGetCatsForBreedsName, search} = useRedux();

  const handlerSearch = (inputValue: string) => {
    handleSetSearch(inputValue);
    handleGetCatsForBreedsName(inputValue);
  };

  const {canGoBack, goBack} = useScreensNavigation();

  const route = useRoute<GenericRouteProp>();
  const title = route.params?.title || 'Catbreeds';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.bg,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '5%',
    },
    containerLandscape: {
      backgroundColor: theme.bg,
      paddingVertical: '2%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: calculateRelativeSize(4.5),
    },
    titleLandscape: {
      textAlign: 'center',
      fontSize: calculateRelativeSize(3),
    },
    contaierToBack: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerSearch: {
      width: '80%',
    },
  });

  return (
    <View
      style={
        orientation === 'landscape'
          ? styles.containerLandscape
          : styles.container
      }>
      <View style={styles.contaierToBack}>
        {canGoBack && <CircularBtn icon="arrow-left" action={goBack} />}
        <Title
          textProps={{
            style:
              orientation === 'landscape'
                ? styles.titleLandscape
                : styles.title,
          }}>
          {title}
        </Title>
      </View>
      {!canGoBack && (
        <View style={orientation === 'landscape' ? styles.containerSearch : {}}>
          <Search valueState={search} onEndEditing={handlerSearch} />
        </View>
      )}
    </View>
  );
};
