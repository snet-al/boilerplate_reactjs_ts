import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

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
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
      <Divider />
      <List>
        {items.map((item) => {
          const { label, icon, path, onClick } = item
          const buttonProps = path
            ? { component: RouterLink, to: path }
            : { onClick: onClick ?? (() => undefined) }

          return (
            <ListItemButton key={label} {...buttonProps}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={label} />
            </ListItemButton>
          )
        })}
      </List>
    </Drawer>
  )
}

export default SideMenu

