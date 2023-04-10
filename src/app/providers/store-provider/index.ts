import type {
  StateSchema, ReduxStoreWithManager, ThunkConfig,
} from './config/state-schema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/store-provider';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  AppDispatch,
  ReduxStoreWithManager,
  ThunkConfig,
};
