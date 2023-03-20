import React from 'react';
// import { ROLES } from 'shared/utils/global.constants';
import { Login, Dashboard } from '../pages';

export const paths = Object.freeze({
  DASHBOARD: '/',
  LOGIN: '/login',
});

const routeNames = Object.freeze({
  DASHBOARD: 'Dashboard',
  LOGIN: 'Login',
});

export const routes = [
  {
    name: routeNames.DASHBOARD,
    path: paths.DASHBOARD,
    protected: false,
    element: <Dashboard />,
    // roles: [ROLES.SUPER_ADMIN, ROLES.DATA_ENTRY, ROLES.BROKER],
  },
  {
    name: routeNames.LOGIN,
    path: paths.LOGIN,
    protected: false,
    element: <Login />
  },
];
