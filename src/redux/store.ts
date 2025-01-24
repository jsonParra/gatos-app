import {configureStore} from '@reduxjs/toolkit';
import {catSlice} from './slices/cats/catSlice';
import {appSlice} from './slices/app/appSlice';

export const store = configureStore({
  reducer: {
    cats: catSlice.reducer,
    app: appSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
