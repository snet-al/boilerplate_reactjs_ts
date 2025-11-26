import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { isLoggedIn } from '../utils';

interface PrivateGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const PrivateGuard: React.FC<PrivateGuardProps> = ({
  children,
  redirectTo = '/login',
}) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateGuard;

