import React from 'react';
import { RoutePath } from 'shared/config/route-config/route-config';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticlesIcon,
    text: 'Статьи',
    authOnly: true,
  },
];
