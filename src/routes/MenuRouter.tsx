import { Link } from "react-router-dom"
import { routesWireframes } from "./routes"

export default function MenuRouter (): JSX.Element {
  return (
    <nav>
      <ul className='menu'>
        {routesWireframes
          // anivellar les rutes, de tal manera que també s'imprimeixin les rutes de les subrutes
          .map((route) => (
            route.children ?
              route.children.map((subroute: any) => (
                <li key={subroute.path}>
                  <Link to={`${route.path}/${subroute.path}`}>
                    {subroute.name}
                  </Link>
                </li>
              )) :
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
          ))
        }
      </ul>
    </nav>
  )
}
