import { Link, useNavigate } from "react-router-dom";
import { ItemNav } from "../stories/ItemNav";
import { Text } from "../stories/Typography";
import { routesHeader } from "../routes";
import { useContext } from "react";
import { WireframesContext } from "../config/WireframesContext";
import { Icon } from "../stories/Atoms";
import DashboardMenu from "./DashboardMenu";

export default function Header (): JSX.Element {
  const { role, auth, setAuth } = useContext(WireframesContext)
  const navigate = useNavigate()
  
  const roleAcces = (route: any): boolean => {
    return route.role.includes(role) || route.role.includes('all')
  }

  const handleLogout = () => {
    setAuth(false)
    closeDashboardMenu()
    navigate('/app/inici')
  }

  function openMenu(){
    const header = document.querySelector(".header")
    const dashboardMenu = document.querySelector(".header__nav--dashboard")
    header?.classList.add("is-open")
    dashboardMenu?.classList.remove("is-open")
  }
  function closeMenu(){
    const header = document.querySelector(".header")
    header?.classList.remove("is-open")
  }

  function toggleDashboardMenu() {
    const dashboardMenu = document.querySelector(".header__nav--dashboard")
    const header = document.querySelector(".header")
    dashboardMenu?.classList.toggle("is-open")
    header?.classList.remove("is-open")
  }

  function closeDashboardMenu() {
    const dashboardMenu = document.querySelector(".header__nav--dashboard")
    dashboardMenu?.classList.remove("is-open")
  }

  return (
    <header className="header">
      <div className="header__topbar topbar">
        <Link to="/app/inici" onClick={closeDashboardMenu} className="topbar__logo">
          <img src="/logos/LOGO-KAMMA_IMPACT_GRÀFICA-DEFINITIVA.png" alt="Kamma Impact" />
        </Link>
        <div className="topbar__actions">
          <div className="topbar__user">
            {auth 
              ? (
                <>
                  <ItemNav>
                    <Link to="/app/perfil" title="Perfil"  onClick={closeMenu} className="no-mobile">
                      <Icon
                        name="shieldAccountOutline"
                        selectedColor="primary"
                        hoverColor="primary"
                      />
                    </Link>
                    <div className="only-mobile"
                      onClick={toggleDashboardMenu}
                    >
                      <Icon
                        name="shieldAccountOutline"
                        selectedColor="primary"
                        hoverColor="primary"
                      />
                    </div>
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
        <Link to="/app/inici"  onClick={closeMenu} className="header__logo">
          <img src="/logos/LOGO-KAMMA_IMPACT_GRÀFICA-DEFINITIVA.png" alt="Kamma Impact" />
        </Link>
        <ul>
          {routesHeader
            .map((route) => (
              roleAcces(route) && (
                <ItemNav key={route.path} call={route.call}>
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
                <ItemNav className="header__user">
                  <Link to="/app/perfil" title="Perfil"  onClick={closeMenu}>
                    <Icon
                      name="shieldAccountOutline"
                      selectedColor="primary"
                      hoverColor="primary"
                    />
                  </Link>
                </ItemNav>
                <ItemNav className="header__user">
                  <button onClick={handleLogout}>Logout</button>
                </ItemNav>
              </>
            )
            : (
              <ItemNav className="header__user">
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
      <nav className="header__nav--dashboard">
        <DashboardMenu />
      </nav>
    </header>
  )
}
