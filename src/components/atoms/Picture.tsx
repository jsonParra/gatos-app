import React, {ReactNode} from 'react';
import {StyleSheet, ImageProps, ImageBackground} from 'react-native';
import {calculateRelativeSize} from '../../utils/calculateRelativeSize';

interface Picture {
  src?: string;
  props?: ImageProps;
  children?: ReactNode;
}

export const Picture = ({src, props, children}: Picture) => {
  return (
    <ImageBackground
      resizeMethod="scale"
      resizeMode="cover"
      {...props}
      style={[stylesPicture.container, stylesPicture.border, props?.style]}
      imageStyle={[stylesPicture.border, props?.style]}
      source={{
        uri:
          src ||
          'https://img.freepik.com/vector-premium/silueta-icono-gato-lindo-aislado-sobre-fondo-blanco-impresion-negro-simple-mascota-gatito-durmiendo-ilustracion-estilo-doodle-contorno-ninos_550143-1505.jpg',
      }}
      children={children}
    />
  );
};
export const stylesPicture = StyleSheet.create({
  text: {
    color: 'white',
  },
  container: {
    flex: 2,
  },
  border: {
    borderRadius: calculateRelativeSize(1),
  },
});

/*


 <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          backgroundColor: '#00000040',
        }}>
        <View
          style={{
            marginVertical: calculateRelativeSize(2),
            marginHorizontal: calculateRelativeSize(2),
          }}>
          <Title type="Subtitle" textProps={{style: styles.text}}>
            Sabrina
          </Title>
        </View>
      </View>

 */
