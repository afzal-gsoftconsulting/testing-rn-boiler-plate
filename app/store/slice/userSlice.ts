import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../models/types';

const initialState: User = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log({action});
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginUser} = userSlice.actions;

export default userSlice.reducer;
