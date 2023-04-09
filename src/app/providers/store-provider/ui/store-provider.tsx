import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store-provider/config/store';
import { StateSchema } from 'app/providers/store-provider/config/state-schema';
import {
  DeepPartial, ReducersMapObject,
} from '@reduxjs/toolkit';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps): JSX.Element {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
