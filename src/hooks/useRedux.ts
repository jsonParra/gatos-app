import {useCallback} from 'react';
//import {setSearch} from '../redux/slices/app/appSlice';
import {cat} from '../redux/slices/cats/catSlice';
import {
  addCats,
  //addCatsForBreedsName,
  getCats,
  getCatsForBreedsName,
} from '../redux/slices/cats/thunks';
import {useAppDispatch} from './useAppDispatch';
import {useAppSelector} from './useAppSelector';
import {setSearch} from '../redux/slices/app/appSlice';

export const useRedux = () => {
  const dispatch = useAppDispatch();

  const {page, cats, isLoading} = useAppSelector(state => state.cats);
  const {orientation, search} = useAppSelector(state => state.app);

  const handleGetCatsForBreedsName = (inputValue: string) => {
    dispatch(getCatsForBreedsName(inputValue));
  };

  const handleAddCats = () => !isLoading && dispatch(addCats(page));

  const handleGetCats = useCallback(async () => {
    dispatch(getCats());
  }, [dispatch]);

  const handleSetSearch = (value: string) =>
    dispatch(setSearch({search: value}));

  const getCurrentCat = (value: string) => {
    return cats.find((catItem: cat) => catItem.id === value);
  };

  return {
    handleGetCatsForBreedsName,
    handleAddCats,
    handleGetCats,
    page,
    cats,
    handleSetSearch,
    isLoading,
    orientation,
    search,
    getCurrentCat,
  };
};

/*
  search
    ? dispatch(addCatsForBreedsName(search, page))
    : d
*/
