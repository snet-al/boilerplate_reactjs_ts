import React from 'react'

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
    <div className="flex min-h-screen bg-muted/40">
      <SideMenu title={menuTitle} width={menuWidth} items={menuItems} />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}

export default AppShellLayout

