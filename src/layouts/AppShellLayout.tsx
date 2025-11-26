import React from 'react'
import { Box, Toolbar } from '@mui/material'

import { SideMenu, SideMenuItem } from '../components'

export type AppShellLayoutProps = {
  children: React.ReactNode
  menuItems: SideMenuItem[]
  menuTitle?: string
  menuWidth?: number
}

export const AppShellLayout: React.FC<AppShellLayoutProps> = ({
  children,
  menuItems,
  menuTitle,
  menuWidth,
}) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <SideMenu title={menuTitle} width={menuWidth} items={menuItems} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: '#f9fafb',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default AppShellLayout

