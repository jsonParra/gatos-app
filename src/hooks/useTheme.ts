import {useEffect, useState} from 'react';
import {darkTheme, lightTheme} from '../utils/themes';
import {useColorScheme} from 'react-native';

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  //deshabilite le modo osucro nativo solo para la presentacion de la app.
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  return {theme, isDarkMode, setTheme};
};
