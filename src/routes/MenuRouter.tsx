import { Link } from "react-router-dom"
import { routesWireframes } from "./routes"
import { useContext } from "react"
import { WireframesContext } from "../config/WireframesContext"

export default function MenuRouter (): JSX.Element {
  const { role } = useContext(WireframesContext)
  
  const roleAcces = (route: any): boolean => {
    return route.role.includes(role) || route.role.includes('all')
  }

  return (
    <nav>
      <ul className='menu'>
        {routesWireframes
          .map((route) => (
            roleAcces(route) && (
              route.children ?
                route.children.map((subroute: any) => (
                  roleAcces(subroute) && (
                    <li key={subroute.path}>
                      <Link to={`${route.path}/${subroute.path}`}>
                        {subroute.name}
                      </Link>
                    </li>
                  )
                )) :
                <li key={route.path}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
            )  
          ))
        }
      </ul>
    </nav>
  )
}
