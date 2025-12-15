import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { cn } from '../../libs/tailwind/merge-tailwind-classes'

export type SideMenuItem = {
  label: string
  icon?: React.ReactNode
  path?: string
  onClick?: () => void
}

export type SideMenuProps = {
  title?: string
  width?: number
  items: SideMenuItem[]
}

export const SideMenu: React.FC<SideMenuProps> = ({
  title = 'Navigation',
  width = 240,
  items,
}) => {
  return (
    <aside
      className="shrink-0 border-r bg-background"
      style={{ width }}
      aria-label={title}
    >
      <div className="flex h-14 items-center border-b px-4">
        <div className="text-sm font-semibold">{title}</div>
      </div>

      <nav className="p-2">
        <ul className="space-y-1">
          {items.map((item) => {
            const { label, icon, path, onClick } = item

            const commonClassName = cn(
              'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground'
            )

            return (
              <li key={label}>
                {path ? (
                  <RouterLink to={path} className={commonClassName}>
                    {icon ? <span className="text-foreground/70">{icon}</span> : null}
                    <span>{label}</span>
                  </RouterLink>
                ) : (
                  <button
                    type="button"
                    className={commonClassName}
                    onClick={onClick ?? (() => undefined)}
                  >
                    {icon ? <span className="text-foreground/70">{icon}</span> : null}
                    <span>{label}</span>
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default SideMenu

