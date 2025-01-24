import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {Cards} from '../molecules';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import {cat} from '../../redux/slices/cats/catSlice';

interface ListCat {
  list: cat[];
  onEndReached: () => void;
  onPressItem: (titleScreen: string, id: string) => void;
}

export const ListCat = ({list, onEndReached, onPressItem}: ListCat) => {
  const style = StyleSheet.create({
    container: {flex: 1, marginVertical: calculateRelativeSize(2)},
  });

  return (
    <FlatList
      onEndReached={() => onEndReached()}
      data={list}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={style.container}>
          <Pressable onPress={() => onPressItem(item.name, item.id)}>
            <Cards
              iconName="location-pin"
              img={item.image?.url}
              subtitle={item.origin}
              title={item.name}
            />
          </Pressable>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};
