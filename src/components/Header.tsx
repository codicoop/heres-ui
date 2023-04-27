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

  function openMenu(){
    const header = document.querySelector(".header")
    header?.classList.add("is-open")
  }
  function closeMenu(){
    const header = document.querySelector(".header")
    header?.classList.remove("is-open")
  }

  return (
    <header className="header">
      <div className="header__topbar topbar">
        <div className="topbar__logo">
          <Text>
            <Link to="/app/inici">
              Logo
            </Link>
          </Text>
        </div>
        <div className="topbar__actions">
          <div className="topbar__user">
            <ItemNav>
              <Link to="/app/login" title="Login">
                <Icon
                  name="account"
                  selectedColor="primary"
                  hoverColor="primary"
                />
              </Link>
            </ItemNav>
          </div>
          <div className="topbar__burguer" onClick={openMenu}>
            <Icon
              name="menu"
              selectedColor="primary"
              hoverColor="primary"
            />
          </div>
          <div className="topbar__close" onClick={closeMenu}>
            <Icon
              name="closeThick"
              selectedColor="primary"
              hoverColor="primary"
            />
          </div>
        </div>
      </div>
      <nav className="header__nav">
        <div className="header__logo">
          <Text>
            <Link to="/app/inici"  onClick={closeMenu}>
              Logo
            </Link>
          </Text>
        </div>
        <ul>
          {routesHeader
            .map((route) => (
              roleAcces(route) && (
                <ItemNav key={route.path}>
                  <Link to={route.path} onClick={closeMenu}>
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
                  <Link to="/app/perfil" title="Perfil"  onClick={closeMenu}>
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
                <Link to="/app/login" title="Login" onClick={closeMenu}>
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
