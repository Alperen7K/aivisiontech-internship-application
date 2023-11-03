import { Navigate, useRoutes } from 'react-router-dom'

import { MainLayout } from '../layouts'
import { Home, Loading } from '../pages'
export const Router = () => {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        // { path: '', element: <Loading /> },
        { path: '', element: <Home /> }
      ]
    },
    { path: '*', element: <Navigate to="/" replace /> }
  ])
}
