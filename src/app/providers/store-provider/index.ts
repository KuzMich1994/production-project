import type { StateSchema } from './config/state-schema';
import { createReduxStore, store } from './config/store';
import { StoreProvider, appStore } from './ui/store-provider';
import { AppDispatch, useAppDispatch } from './config/dispatch';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  store,
  useAppDispatch,
  AppDispatch,
  appStore,
};
