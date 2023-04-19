import { Error404, Home, InitWireframe } from '../pages'
import { Inici } from '../pages/Base'

export const routesWireframes: any[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
    name: 'Home',
  },
  {
    path: '/app',
    element: <InitWireframe />,
    name: 'App',
    children: [
      {
        path: 'inici',
        element: <Inici />,
        name: 'Inici',
      }
    ],
  }
]