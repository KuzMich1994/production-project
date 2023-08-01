import { MainPage } from '@/pages/main-page';
import { AboutPage } from '@/pages/about';
import { ProfilePage } from '@/pages/profile-page';
import { ArticlesPage } from '@/pages/articles-page';
import { ArticleDetailsPageNew } from '@/pages/article-details-page-new';
import { ArticleEditPage } from '@/pages/article-edit-page';
import { AdminPanelPage } from '@/pages/admin-panel-page';
import { UserRole } from '@/entities/user';
import { ForbiddenPage } from '@/pages/forbidden-page';
import { NotFoundPage } from '@/pages/not-found-page';
import {
  AppRoutes,
  getRouteAbout, getRouteAdminPanel, getRouteArticleDetails, getRouteArticleEdit, getRouteArticleNew,
  getRouteArticles, getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPageNew />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticleNew(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
