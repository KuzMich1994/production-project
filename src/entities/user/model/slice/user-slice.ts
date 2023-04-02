import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  initialState,
  name: 'USER',
  reducers: {

  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
