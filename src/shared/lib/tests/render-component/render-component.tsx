import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18n-for-tests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>,
}

export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
  const {
    route = '/',
    initialState,
  } = options;

  return (
    render(
      <StoreProvider initialState={initialState}>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>
            {component}
          </I18nextProvider>
        </MemoryRouter>
      </StoreProvider>,
    )
  );
}
