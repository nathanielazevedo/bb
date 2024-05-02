import Frame from './components/Frame'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './Signin'
import Chat from './pages/chat/Chat'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <Frame />,
    children: [
      {
        path: 'charts',
        element: <></>,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
    ],
  },
])

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
