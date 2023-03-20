import React from 'react'

interface Props {
  children: React.ReactNode
}

export const PrivateLayout = ({children}: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateLayout;