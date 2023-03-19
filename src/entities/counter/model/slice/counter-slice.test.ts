import { counterReducer, counterActions } from './counter-slice';
import { CounterSchema } from '../types/counter-schema';

describe('counterSlice', () => {
  test('increment counter value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(
      state,
      counterActions.increment(),
    ))
      .toEqual({ value: 11 });
  });
  test('decrement counter value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(
      state,
      counterActions.decrement(),
    ))
      .toEqual({ value: 9 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(
      undefined,
      counterActions.increment(),
    ))
      .toEqual({ value: 1 });
  });
});
