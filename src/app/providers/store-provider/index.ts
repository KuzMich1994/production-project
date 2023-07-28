import type {
  ReduxStoreWithManager, StateSchema, ThunkConfig, StateSchemaKey,
} from './config/state-schema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/store-provider';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkConfig,
};

export type { AppDispatch };
