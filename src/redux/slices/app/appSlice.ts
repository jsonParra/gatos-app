import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Orientation = 'portrait' | 'landscape';

const initialState = {
  orientation: 'portrait',
  search: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOrientation: (state, action: PayloadAction<Orientation>) => {
      state.orientation = action.payload;
    },
    setSearch: (state, action: PayloadAction<{search: string}>) => {
      state.search = action.payload.search;
    },
  },
});

export const {setOrientation, setSearch} = appSlice.actions;
