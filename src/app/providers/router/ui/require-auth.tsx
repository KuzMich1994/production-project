import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/user';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
  roles?: UserRole[],
  children: JSX.Element;
}

function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requireRole) => {
      const hasRole = userRoles?.includes(requireRole);

      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
