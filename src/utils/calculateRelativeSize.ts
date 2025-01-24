import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
export const calculateRelativeSize = (percentage: number) => {
  return Math.round((percentage * height) / 100);
};
