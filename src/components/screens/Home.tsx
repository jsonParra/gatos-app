import React from 'react';
import {HomeTemplate} from '../templates/HomeTemplate';
import {useRedux, useOrientation, useScreensNavigation} from '../../hooks';
import {useEffect} from 'react';

export const Home = () => {
  const {navigate} = useScreensNavigation();
  useOrientation();
  const {isLoading, handleGetCats, cats, handleAddCats, search} = useRedux();
  const handleEndReachedList = () => {
    search.length === 0 && handleAddCats();
  };
  useEffect(() => {
    handleGetCats();
  }, [handleGetCats]);

  return (
    <>
      <HomeTemplate
        onPressItemList={(titleScreen: string, id: string) =>
          navigate('Detail', titleScreen, id)
        }
        listCats={cats}
        onEndReachedList={handleEndReachedList}
        isLoading={isLoading}
      />
    </>
  );
};
