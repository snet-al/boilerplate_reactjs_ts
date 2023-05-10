import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import PrivateGuard from '../guards/PrivateGuard'
import PublicGuard from '../guards/PublicGuard'

import Loadable from './Loadable'

const Router = () =>
  useRoutes([
    {
      path: '/',
      element: (
        <PublicGuard>
          <DashboardPage />
        </PublicGuard>
      ),
      index: true,
    },
    {
      path: 'dashboard',
      element: (
        <PrivateGuard>
          <DashboardPage />
        </PrivateGuard>
      ),
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <PublicGuard>
              <LoginPage />
            </PublicGuard>
          ),
          index: true,
        },
        {
          path: 'register',
          element: (
            <PublicGuard>
              <RegisterPage />
            </PublicGuard>
          ),
        },
      ],
    },
    {
      path: '*',
      children: [
        {
          path: '404',
          element: <Error404Page />,
        },
      ],
    },
  ])

export default Router

// Guest routes
const LoginPage = Loadable(lazy(() => import('../pages/Auth/Login')))
const RegisterPage = Loadable(lazy(() => import('../pages/Auth/Register')))

// Auth routes
const DashboardPage = Loadable(lazy(() => import('../pages/Dashboard')))

// Error routes
const Error404Page = Loadable(lazy(() => import('../pages/Error404')))
