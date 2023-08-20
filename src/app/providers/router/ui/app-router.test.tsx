import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/render-component/render-component';
import { AppRouter } from './app-router';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/user';

describe('app/router/app-router', () => {
  test('Страница должна рендериться', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('about-page');

    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    renderComponent(<AppRouter />, {
      route: '/asdasohdfjwgqr',
    });

    const page = await screen.findByTestId('not-found-page');

    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('main-page');

    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _mounted: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('profile-page');

    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (отстутствует роль)', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _mounted: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('forbidden-page');

    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (присутствует роль)', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _mounted: true, authData: { roles: UserRole.ADMIN } },
      },
    });

    const page = await screen.findByTestId('admin-panel-page');

    expect(page).toBeInTheDocument();
  });
});
