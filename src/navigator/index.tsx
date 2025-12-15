import { useRoutes } from 'react-router-dom'
import { DashboardPage, LoginPage } from '../pages'
import {PublicGuard, PrivateGuard} from '../guards'
import { AppShellLayout } from '../layouts'

export const Navigator = () =>
  useRoutes([
    {
      path: '/',
      element: <PrivateGuard>
        <AppShellLayout
         menuItems={[
          { label: 'Dashboard', path: '/' },
          { label: 'Users', path: '/users' }
        ]}>
          <DashboardPage />
        </AppShellLayout>
      </PrivateGuard>,
    },
    {
      path: '/login',
      element: <PublicGuard>
          <LoginPage />
      </PublicGuard>,
    },
  ])

export default Navigator

