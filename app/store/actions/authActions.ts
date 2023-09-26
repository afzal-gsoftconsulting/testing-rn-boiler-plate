import {createAction} from '@reduxjs/toolkit';
import {LOGIN_REQUEST} from './types';

export const loginRequest = createAction(LOGIN_REQUEST, function prepare(data) {
  return {
    payload: data,
  };
});
