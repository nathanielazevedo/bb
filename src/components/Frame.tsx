import * as React from 'react'
import MuiDrawer from '@mui/material/Drawer'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import logo from '../assets/br-logo.svg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import ChatIcon from '@mui/icons-material/Chat'
import { NavLink, Outlet } from 'react-router-dom'

const sideNavRoutes = [
  {
    icon: <AnalyticsIcon />,
    text: 'Tools',
    to: '/tools',
  },
  {
    icon: <ChatIcon />,
    text: 'AI Chat',
    to: 'chat',
  },
]

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function ClippedDrawer() {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <img src={logo} width={100} />
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <Toolbar />
        <List>
          {sideNavRoutes.map((route, index) => (
            <NavLink to={route.to}>
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={route.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Divider />
        <ListItem disablePadding sx={{ display: 'block', paddingY: '5px' }}>
          <ListItemButton
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Drawer>
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, display: 'flex', mt: '64px' }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
