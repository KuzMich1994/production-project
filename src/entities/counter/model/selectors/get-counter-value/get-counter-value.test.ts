import { getCounterValue } from 'entities/counter/model/selectors/get-counter-value/get-counter-value';
import { StateSchema } from 'app/providers/store-provider';

describe('getCounterValue', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
