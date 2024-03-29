import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18n-for-tests';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';

export interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = options;

  return (
    render(
      <MemoryRouter initialEntries={[route]}>
        <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
          <I18nextProvider i18n={i18nForTests}>
            {component}
          </I18nextProvider>
        </StoreProvider>
      </MemoryRouter>,
    )
  );
}
