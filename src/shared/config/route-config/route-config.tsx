import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { UserRole } from 'entities/user';
import { AboutPage } from 'pages/about';
import { ProfilePage } from 'pages/profile-page';
import { ArticlesPage } from 'pages/articles-page';
import { ArticleEditPage } from 'pages/article-edit-page';
import { AdminPanelPage } from 'pages/admin-panel-page';
import { ForbiddenPage } from 'pages/forbidden-page';
import { NotFoundPage } from 'pages/not-found-page';
import { ArticleDetailsPageNew } from 'pages/article-details-page-new';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[],
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  // last
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: `/${AppRoutes.ABOUT}`,
  [AppRoutes.PROFILE]: `/${AppRoutes.PROFILE}/`,
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.ARTICLE_CREATE]: `/${AppRoutes.ARTICLES}/new`,
  [AppRoutes.ARTICLE_EDIT]: `/${AppRoutes.ARTICLES}/:id/edit`,
  [AppRoutes.ADMIN_PANEL]: '/admin/',
  [AppRoutes.FORBIDDEN]: '/forbidden/',
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
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPageNew />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
};
