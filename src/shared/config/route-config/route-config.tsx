import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about';
import { NotFoundPage } from 'pages/not-found-page';
import { ProfilePage } from 'pages/profile-page';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // last
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: `/${AppRoutes.ABOUT}`,
  [AppRoutes.PROFILE]: `/${AppRoutes.PROFILE}`,
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
};
