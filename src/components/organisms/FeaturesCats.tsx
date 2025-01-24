import React from 'react';
import {StyleSheet, View} from 'react-native';
import {cat as ICat} from '../../redux/slices/cats/catSlice';
import {RatingCards} from '../molecules';

interface FeaturesCats {
  cat: ICat;
}
export const FeaturesCats = ({cat}: FeaturesCats) => {
  const style = StyleSheet.create({
    container: {flexDirection: 'row'},
    feacturesContainer: {flex: 1, alignItems: 'center'},
  });
  return (
    <View style={style.container}>
      <View style={style.feacturesContainer}>
        <RatingCards text={'Affectionate'} length={cat.affection_level || 0} />
        <RatingCards text={'Energy Level'} length={cat.energy_level || 0} />
        <RatingCards text={'Intelligence'} length={cat.intelligence || 0} />
      </View>
      <View style={style.feacturesContainer}>
        <RatingCards text={'Shedding Level'} length={cat.shedding_level || 0} />
        <RatingCards text={'Health Issues'} length={cat.health_issues || 0} />
        <RatingCards text={'Adaptability'} length={cat.adaptability || 0} />
      </View>
    </View>
  );
};
