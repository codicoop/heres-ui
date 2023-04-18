import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Text from './stories/Typography/Text'
import './styles/App.css'
import { Error404, Home, InitWireframe } from './pages'
import { MenuModal } from './components'

const routes: object[] = [
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
        path: ':role',
        element: <Text>Role</Text>,
      },
    ],
  }
]

const router = createBrowserRouter(routes)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <MenuModal />
    </div>
  )
}

export default App
