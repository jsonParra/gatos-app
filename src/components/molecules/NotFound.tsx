import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Paragraph, Title} from '../atoms';
import {useRedux} from '../../hooks/';

export const NoFound = () => {
  const {orientation} = useRedux();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="center"
        style={orientation === 'portrait' ? styles.img : styles.imgVertical}
        source={require('../../assets/img/notfound.png')}
      />
      <Title textProps={{style: {textAlign: 'center'}}}>Not Found</Title>

      <Paragraph textProps={{style: {textAlign: 'center'}}}>
        We did not find any information regarding your search.
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
  img: {width: '100%', height: '50%'},
  imgVertical: {width: '10%', height: '40%'},
});
