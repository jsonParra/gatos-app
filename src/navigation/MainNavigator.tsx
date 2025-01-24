import React from 'react';
import dataScreens from '../utils/dataScreens';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {Header} from '../components/organisms/Header';

const Stack = createNativeStackNavigator();

const customHeader = (props: NativeStackHeaderProps) => <Header {...props} />;

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: customHeader,
    }}>
    {dataScreens.map((dataScreen, index) => (
      <Stack.Screen
        key={index}
        name={dataScreen.name}
        component={dataScreen.component}
        options={{animation: 'fade'}}
      />
    ))}
  </Stack.Navigator>
);

export default MainStack;
//Catbreeds
