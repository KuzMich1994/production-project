import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counter-schema';

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = createSlice({
  initialState,
  name: 'COUNTER',
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;