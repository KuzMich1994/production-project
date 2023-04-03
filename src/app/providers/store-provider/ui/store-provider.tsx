import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store-provider/config/store';
import { StateSchema } from 'app/providers/store-provider/config/state-schema';
import { AnyAction, DeepPartial, ThunkMiddleware } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

let createdStore: ToolkitStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction, undefined>]>;

export function StoreProvider({ children, initialState }: StoreProviderProps): JSX.Element {
  const store = createReduxStore(initialState as StateSchema);

  useEffect(() => {
    createdStore = store;
  }, [store]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export const appStore = createdStore;
