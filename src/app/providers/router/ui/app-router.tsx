import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'widgets/page-loader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';

export function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }

    return true;
  }), [isAuth]);

  return (
    <Routes>
      {
        routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            )}
          />
        ))
      }
    </Routes>

  );
}

export default memo(AppRouter);
