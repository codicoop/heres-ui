import { Error404, Home, InitWireframe } from '../pages'
import { Login, RecoverPass, RecoverPassOk } from '../pages/Auth'
import { Contact, ContactOk, Inici } from '../pages/Base'
import { Biblio } from '../pages/Biblio'

export const routesHeader: any[] = [
  {
    path: 'biblioteca',
    element: <Biblio />,
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
    element: <Contact />,
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

export const routesBase: any[] = [
  {
    path: 'contacte-ok',
    element: <ContactOk />,
    name: 'Contacte Ok',
    role: ['all'],
  },
]

export const routesDashboard: any[] = [
  {
    path: 'perfil',
    element: <>Perfil</>,
    name: 'Perfil',
    role: ['all'],
  },
]

export const routesBiblio: any[] = [
  {
    path: 'practiques',
    element: <>Bones Practiques</>,
    name: 'Bones Pràctiques',
    role: ['all'],
  },
  {
    path: 'metodologies',
    element: <>Metodologies</>,
    name: 'Metodologies',
    role: ['all'],
  },
  {
    path: 'noticies',
    element: <>Noticies</>,
    name: 'Noticies',
    role: ['all'],
  }
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
      ...routesDashboard,
      ...routesBiblio,
      ...routesBase,
    ],
  }
]

export const routes: any[] = [
  ...routesWireframes,
]