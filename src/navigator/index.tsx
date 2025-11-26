import React from 'react'
import { useRoutes } from 'react-router-dom'

import { DashboardPage, LoginPage } from '../pages'
import {PublicGuard, PrivateGuard} from '../guards'

export const Navigator = () =>
  useRoutes([
    {
      path: '/',
      element: <PrivateGuard><DashboardPage /></PrivateGuard>,
    },
    {
      path: '/login',
      element: <PublicGuard><LoginPage /></PublicGuard>,
    },
  ])

export default Navigator

