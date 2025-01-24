import React, {useMemo} from 'react';
import {DetailsTemplate} from '../templates/DetailsTemplate';
import {useRedux, useScreensNavigation} from '../../hooks';

export const Detail = () => {
  const {params} = useScreensNavigation();
  const {getCurrentCat} = useRedux();
  const cat = useMemo(() => {
    return getCurrentCat(params.id);
  }, [getCurrentCat, params.id]);
  return (
    <>
      <DetailsTemplate cat={cat} />
    </>
  );
};
