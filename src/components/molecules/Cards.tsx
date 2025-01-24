import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Title, Picture, stylesPicture} from '../atoms/';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';
import {useTheme} from '../../hooks/';

interface Cards {
  title: string;
  subtitle: string;
  img: string;
  iconName: string;
}

export const Cards = ({title, subtitle, img, iconName}: Cards) => {
  const {theme} = useTheme();
  const styles = StyleSheet.create({
    container: {
      height: calculateRelativeSize(30),
      backgroundColor: theme.bg,
      borderRadius: calculateRelativeSize(2),
    },
    info: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    btnInfo: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    TextInfo: {flexWrap: 'nowrap'},
    pictureInfo: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#00000040',
      justifyContent: 'space-between',
      padding: calculateRelativeSize(1),
    },
    pictureInfoTitle: {
      color: 'white',
      alignSelf: 'flex-end',
    },
    pictureInfoUbication: {
      color: 'white',
      alignSelf: 'flex-start',
    },
  });
  return (
    <View style={styles.container}>
      <Picture src={img}>
        <View style={[styles.pictureInfo, stylesPicture.border]}>
          <Paragraph
            iconProps={{name: iconName, color: theme.error}}
            textProps={{style: styles.pictureInfoUbication}}>
            {subtitle}
          </Paragraph>

          <Title textProps={{style: styles.pictureInfoTitle}} type="Subtitle">
            {title}
          </Title>
        </View>
      </Picture>
    </View>
  );
};
