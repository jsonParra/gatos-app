import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export type RootStackParamList = {
  Home: {title?: string; id: string};
  Detail: {title?: string; id: string};
};
export type GenericRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>;
type NavigationProps = NavigationProp<RootStackParamList>;
type screenName = 'Home' | 'Detail';

export const useScreensNavigation = () => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<GenericRouteProp>();

  const navigate = (screenName: screenName, title: string, id: string) =>
    navigation.navigate(screenName, {
      title,
      id,
    });

  const canGoBack = navigation.canGoBack();
  const goBack = () => {
    navigation.goBack();
  };

  const params = route.params;

  return {navigate, canGoBack, goBack, params};
};
