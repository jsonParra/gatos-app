import {Home, Detail} from '../components/screens/index';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

interface dataScreen {
  name: 'Home' | 'Detail';
  component: () => React.JSX.Element;
  options?: NativeStackNavigationOptions;
}
const dataScreens: dataScreen[] = [
  {name: 'Home', component: Home, options: {}},
  {name: 'Detail', component: Detail, options: {}},
];

export default dataScreens;
