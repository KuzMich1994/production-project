import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';
import { AppRoutesProps, routeConfig } from 'shared/config/route-config/route-config';
import RequireAuth from 'app/providers/router/ui/require-auth';

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
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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
