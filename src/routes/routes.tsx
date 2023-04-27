import { Error404, Home, InitWireframe } from '../pages'
import { Login, RecoverPass, RecoverPassOk, Register, RegisterOk } from '../pages/Auth'
import { Contact, ContactOk, Inici } from '../pages/Base'
import { Biblio, MethodologyAdd, MethodologyEdit, MethodologyList, MethodologyView, NewsList, PostAdd, PostEdit, PostView, PracticeAdd, PracticeEdit, PracticeList, PracticeView } from '../pages/Biblio'
import { Profile } from '../pages/Dashboard'

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
    element: <Register />,
    name: 'Register',
    role: ['all'],
  },
  {
    path: 'register-ok',
    element: <RegisterOk />,
    name: 'Register Ok',
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
    element: <Profile />,
    name: 'Perfil',
    role: ['all'],
  },
]

export const routesBiblio: any[] = [
  {
    path: 'practiques',
    element: <PracticeList />,
    name: 'Bones Pràctiques',
    role: ['all'],
  },
  {
    path: 'metodologies',
    element: <MethodologyList />,
    name: 'Metodologies',
    role: ['all'],
  },
  {
    path: 'noticies',
    element: <NewsList />,
    name: 'Noticies',
    role: ['all'],
  }
]

export const routesBiblioActions: any[] = [
  {
    path: 'practiques/:id',
    element: <PracticeView />,
    name: 'Pràctica',
    role: ['all'],
  },
  {
    path: 'practiques/nova',
    element: <PracticeAdd />,
    name: 'Nova Pràctica',
    role: ['org', 'admin'],
  },
  {
    path: 'practiques/editar/:id',
    element: <PracticeEdit />,
    name: 'Editar Pràctica',
    role: ['org', 'admin'],
  },
  {
    path: 'metodologies/:id',
    element: <MethodologyView />,
    name: 'Metodologia',
    role: ['all'],
  },
  {
    path: 'metodologies/nova',
    element: <MethodologyAdd />,
    name: 'Nova Metodologia',
    role: ['admin'],
  },
  {
    path: 'metodologies/editar/:id',
    element: <MethodologyEdit />,
    name: 'Editar Metodologia',
    role: ['admin'],
  },
  {
    path: 'noticies/:id',
    element: <PostView />,
    name: 'Noticia',
    role: ['all'],
  },
  {
    path: 'noticies/nova',
    element: <PostAdd />,
    name: 'Nova Noticia',
    role: ['admin'],
  },
  {
    path: 'noticies/editar/:id',
    element: <PostEdit />,
    name: 'Editar Noticia',
    role: ['admin'],
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
      ...routesBiblioActions,
      ...routesBase,
    ],
  }
]

export const routes: any[] = [
  ...routesWireframes,
]