import { PropsWithChildren, useEffect } from 'react';
import { ReduxStoreWithManager } from 'app/providers/store-provider';
import { useStore } from 'react-redux';
import { StateSchemaKey } from 'app/providers/store-provider/config/state-schema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch/use-app-dispatch';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducerList: ReducerList;
  removeAfterUnmount?: boolean;
}

export function DynamicModuleLoader({
  children, reducerList, removeAfterUnmount,
}: PropsWithChildren<DynamicModuleLoaderProps>): JSX.Element {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducerList).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducerList).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };

    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
}
