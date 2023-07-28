import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/page-loader';
import RequireAuth from './require-auth';
import { routeConfig } from '../config/route-config';
import { AppRoutesProps } from '@/shared/types/router';

export function AppRouter() {
  const renderWithContainer = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithContainer)}
    </Routes>

  );
}

export default memo(AppRouter);
