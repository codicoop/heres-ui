import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { routes } from './routes'
import { WireframesProvider } from './config/WireframesContext'

const router = createBrowserRouter(routes)

function App() {
  return (
    <div className="App">
      <WireframesProvider>
        <RouterProvider router={router} />
      {/* <MenuModal /> */}
      </WireframesProvider>
    </div>
  )
}

export default App
