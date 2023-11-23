import { Navigate, useRoutes } from 'react-router-dom'

import { MainLayout } from '../layouts'
import { Deneme, Home, Loading } from '../pages'
export const Router = () => {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        // { path: '', element: <Loading /> },
        { path: '', element: <Home /> },
        { path: '/deneme', element: <Deneme /> }
      ]
    },
    { path: '*', element: <Navigate to="/" replace /> }
  ])
}
