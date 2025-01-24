import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import {Paragraph, Title} from '../atoms';
import {cat as ICat} from '../../redux/slices/cats/catSlice';
import {FeaturesCats} from './FeaturesCats';

interface AboutCat {
  cat: ICat;
}

export const AboutCat = ({cat}: AboutCat) => {
  const styles = StyleSheet.create({
    containerAbout: {flex: 1},
    containerFullScreen: {
      width: '100%',
      height: '100%',
    },

    //
    ContainerCharacteristicsHealthy: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: calculateRelativeSize(1),
    },
  });
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.containerAbout}>
      <View style={styles.ContainerCharacteristicsHealthy}>
        <Paragraph
          textProps={{
            style: {
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: calculateRelativeSize(2),
            },
          }}
          iconProps={{
            name: 'healing',
            size: calculateRelativeSize(3),
          }}>{`${cat.life_span}Years`}</Paragraph>
        <Paragraph
          textProps={{
            style: {
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: calculateRelativeSize(2),
            },
          }}
          iconProps={{
            name: 'scale',
            size: calculateRelativeSize(3),
          }}>{`${cat.weight.metric}Kg`}</Paragraph>
      </View>

      <Title type="Subtitle"> Breed Characteristics:</Title>
      <FeaturesCats cat={cat} />
      <Title type="Subtitle">Description:</Title>
      <Paragraph>{cat.description}</Paragraph>
      <Paragraph>{cat.description}</Paragraph>
      <Paragraph>{cat.description}</Paragraph>

      <Title type="Subtitle">Temperament:</Title>
      <Paragraph>{cat.temperament}</Paragraph>
    </ScrollView>
  );
};
