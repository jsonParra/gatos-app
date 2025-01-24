//ejetua una funcion que cunado se rtesuelve ejecutra el set..
// del reducer es asincrona.

import {theCatApi} from '../../../apis/theCatApi';
import {AppDispatch} from '../../store';
import {AddCats, setCats, startLoading} from './catSlice';

export const getCats = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    const {data} = await theCatApi.get('/breeds?&page=0');
    dispatch(setCats({cats: data, page: 1}));
  };
};

export const addCats = (page: number = 0) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    const {data} = await theCatApi.get(`/breeds?&page=${page}`);
    dispatch(AddCats({cats: data, page: page + 1}));
  };
};

export const getCatsForBreedsName = (breeds: string) => {
  if (breeds) {
    return async (dispatch: AppDispatch) => {
      dispatch(startLoading());
      const {data} = await theCatApi.get(`/breeds/search?q=${breeds}&page=0}`);
      dispatch(setCats({cats: data, page: 0}));
    };
  }
  return getCats();
};
