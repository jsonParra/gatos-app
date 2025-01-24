import {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {setOrientation} from '../redux/slices/app/appSlice';
import {AppDispatch} from '../redux/store';

export const useOrientation = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const updateOrientation = () => {
      const {width, height} = Dimensions.get('window');
      const orientation = width > height ? 'landscape' : 'portrait';
      dispatch(setOrientation(orientation));
    };
    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );
    updateOrientation();
    return () => {
      subscription?.remove();
    };
  }, [dispatch]);
};
