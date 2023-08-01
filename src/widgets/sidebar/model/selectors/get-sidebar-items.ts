import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/user';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'Главная',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }
    return sidebarItemsList;
  },
);
