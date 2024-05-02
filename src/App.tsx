import Frame from './components/Frame'
import './App.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './Signin'
import BoxPlot from './components/BoxPlot'

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
        element: <BoxPlot />,
      },
    ],
  },
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
