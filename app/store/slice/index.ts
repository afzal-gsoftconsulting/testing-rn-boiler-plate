import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './userSlice';

const reducers = {
  user: userSlice,
};
export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
