import type { StateSchema, ReduxStoreWithManager } from './config/state-schema';
import { createReduxStore } from './config/store';
import { StoreProvider, appStore } from './ui/store-provider';
import { AppDispatch, useAppDispatch } from './config/dispatch';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  useAppDispatch,
  AppDispatch,
  appStore,
  ReduxStoreWithManager,
};
