import { FunctionComponent, ReactNode } from 'react'

import PublicLayout from '../layouts/PublicLayout'

interface PublicGuardProps {
  children: ReactNode
}

const PublicGuard: FunctionComponent<PublicGuardProps> = ({ children }) => {
  return <PublicLayout>{children}</PublicLayout>
}

export default PublicGuard
