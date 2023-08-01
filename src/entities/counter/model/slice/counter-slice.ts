import { PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counter-schema';
import { buildSlice } from '@/shared/lib/store';

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = buildSlice({
  initialState,
  name: 'COUNTER',
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
