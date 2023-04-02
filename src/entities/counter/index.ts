import { counterReducer } from 'entities/counter/model/slice/counter-slice';
import { CounterSchema } from './model/types/counter-schema';
import { Counter } from './ui/counter';

export {
  CounterSchema,
  Counter,
  counterReducer,
};