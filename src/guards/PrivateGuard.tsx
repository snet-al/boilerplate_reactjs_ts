import { FunctionComponent, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import PrivateLayout from '../layouts/PrivateLayout'

interface PrivateGuardProps {
  children: ReactNode
}

const PrivateGuard: FunctionComponent<PrivateGuardProps> = ({ children }) => {
  const location = useLocation()

  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <PrivateLayout>{children}</PrivateLayout>
}

export default PrivateGuard
