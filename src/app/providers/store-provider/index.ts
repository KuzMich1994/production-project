import type { ReduxStoreWithManager, StateSchema, ThunkConfig } from './config/state-schema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/store-provider';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
};

export type { AppDispatch };
