import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListCat} from '../organisms/ListCat';
import {cat} from '../../redux/slices/cats/catSlice';
import {Load} from '../atoms';
import {NoFound} from '../molecules';
import {useTheme} from '../../hooks';

interface HomeTemplate {
  listCats: cat[];
  onEndReachedList: () => void;
  onPressItemList: (titleScreen: string, id: string) => void;
  isLoading: boolean;
}

export const HomeTemplate = ({
  listCats,
  onEndReachedList,
  onPressItemList,
  isLoading,
}: HomeTemplate) => {
  const {theme} = useTheme();
  const styles = StyleSheet.create({
    containerTemplate: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.bg,
      paddingHorizontal: 30,
    },
  });
  return (
    <View style={styles.containerTemplate}>
      <ListCat
        list={listCats}
        onEndReached={onEndReachedList}
        onPressItem={onPressItemList}
      />
      {isLoading && <Load />}
      {!isLoading && listCats.length === 0 && <NoFound />}
    </View>
  );
};
