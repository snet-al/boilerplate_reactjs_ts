import React from 'react';
import { Navigate } from 'react-router-dom';

import { isLoggedIn } from '../utils';

interface PublicGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const PublicGuard: React.FC<PublicGuardProps> = ({
  children,
  redirectTo = '/',
}) => {
  if (isLoggedIn()) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default PublicGuard;

