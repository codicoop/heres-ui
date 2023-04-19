import { Link } from "react-router-dom";
import { ItemNav } from "../stories/ItemNav";
import { Text } from "../stories/Typography";
import { routesHeader } from "../routes";
import { useContext } from "react";
import { WireframesContext } from "../config/WireframesContext";

export default function Header (): JSX.Element {
  const { role } = useContext(WireframesContext)
  
  const roleAcces = (route: any): boolean => {
    return route.role.includes(role) || route.role.includes('all')
  }

  return (
    <header>
      <Text>
        <Link to="/app/inici">
          Logo
        </Link>
      </Text>
      <nav>
        <ul>
          {routesHeader
            .map((route) => (
              roleAcces(route) && (
                <ItemNav key={route.path}>
                  <Link to={route.path}>
                    {route.name}
                  </Link>
                </ItemNav>
              )
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
