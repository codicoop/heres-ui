import { Link, useNavigate } from "react-router-dom";
import { ItemNav } from "../stories/ItemNav";
import { Text } from "../stories/Typography";
import { routesHeader } from "../routes";
import { useContext } from "react";
import { WireframesContext } from "../config/WireframesContext";
import { Icon } from "../stories/Atoms";

export default function Header (): JSX.Element {
  const { role, auth, setAuth } = useContext(WireframesContext)
  const navigate = useNavigate()
  
  const roleAcces = (route: any): boolean => {
    return route.role.includes(role) || route.role.includes('all')
  }

  const handleLogout = () => {
    setAuth(false)
    navigate('/app/inici')
  }

  return (
    <header className="header">
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
          {auth 
            ? (
              <>
                <ItemNav>
                  <Link to="/app/perfil" title="Perfil">
                    <Icon
                      name="shieldAccountOutline"
                      selectedColor="primary"
                      hoverColor="primary"
                    />
                  </Link>
                </ItemNav>
                <ItemNav>
                  <button onClick={handleLogout}>Logout</button>
                </ItemNav>
              </>
            )
            : (
              <ItemNav>
                <Link to="/app/login" title="Login">
                  <Icon
                    name="account"
                    selectedColor="primary"
                    hoverColor="primary"
                  />
                </Link>
              </ItemNav>
            )
          }
        </ul>
      </nav>
    </header>
  )
}
