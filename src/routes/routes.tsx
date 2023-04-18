import { Error404, Home, InitWireframe } from '../pages'
import { Inici } from '../pages/Base'
import { Text } from '../stories/Typography/Text/Text'

export const routes: object[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/app',
    element: <InitWireframe />,
    children: [
      {
        path: 'inici',
        element: <Inici />,
      }
    ],
  }
]