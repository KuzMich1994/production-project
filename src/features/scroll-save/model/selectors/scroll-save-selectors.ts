import { StateSchema } from 'app/providers/store-provider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPosition = (state: StateSchema) => state.scrollPosition.scroll;
export const getScrollPositionByPath = createSelector(
  getScrollPosition,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);