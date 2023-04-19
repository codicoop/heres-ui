import { Error404, Home, InitWireframe } from '../pages'
import { Login, RecoverPass, RecoverPassOk } from '../pages/Auth'
import { Inici } from '../pages/Base'

export const routesHeader: any[] = [
  {
    path: 'biblioteca',
    element: <>Biblioteca</>,
    name: 'Biblioteca',
    role: ['all'],
  },
  {
    path: 'autodiagnostic',
    element: <>Eina Autodiagnostic</>,
    name: 'Eina Autodiagnostic',
    role: ['org'],
  },
  {
    path: 'formacio',
    element: <>Formació</>,
    name: 'Formació',
    role: ['all'],
  },
  {
    path: 'acompanyament',
    element: <>Acompanyament</>,
    name: 'Acompanyament',
    role: ['all'],
  },
  {
    path: 'contacte',
    element: <>Contacte</>,
    name: 'Contacte',
    role: ['all'],
  },
]

export const routesAuth: any[] = [
  {
    path: 'login',
    element: <Login />,
    name: 'Login',
    role: ['all'],
  },
  {
    path: 'register/:step',
    element: <>Register</>,
    name: 'Register',
    role: ['all'],
  },
  {
    path: 'recoverpass',
    element: <RecoverPass />,
    name: 'Recover Password',
    role: ['all'],
  },
  {
    path: 'recoverpass-ok',
    element: <RecoverPassOk />,
    name: 'Mail Recover Password',
    role: ['all'],
  },
]

export const routesWireframes: any[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
    name: 'Home',
    role: ['all'],
  },
  {
    path: '/app',
    element: <InitWireframe />,
    name: 'App',
    role: ['all'],
    children: [
      {
        path: 'inici',
        element: <Inici />,
        name: 'Inici',
        role: ['all'],
      },
      ...routesHeader,
      ...routesAuth,
    ],
  }
]

export const routes: any[] = [
  ...routesWireframes,
]