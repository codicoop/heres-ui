import { useContext } from "react"
import { WireframesContext } from "../config/WireframesContext"
import { Text } from "../stories/Typography"
import { Link } from "react-router-dom"
import { DropdownMenu } from "../stories/Molecules/DropdownMenu"
import { Filters } from "../stories/Organisms"

export type filter = {
  name: string
  value: string
  options: string[]
}

export interface DashboardMenuProps {
  filters?: filter[]
  defaultActive?: string
}

export default function DashboardMenu ({
  filters,
}: DashboardMenuProps): JSX.Element {
  const { role } = useContext(WireframesContext)
  let nameRole: string = role

  if (role === 'user') nameRole = 'usuari'
  if (role === 'org') nameRole = 'organització'

  const closeDashboardMenu = () => {
    const dashboardMenu = document.querySelector('.header__nav--dashboard')
    dashboardMenu?.classList.remove('is-open')
  }

  return (
    <aside className="dashboard-menu">
      <div>
        <Text as="h2" variant="title" className="dashboard-menu__title">
          Panell d'{nameRole}
        </Text>
        <ul>
          <DropdownMenu text="Perfil">
            <>
              <li>
                <Link to="/app/perfil" onClick={closeDashboardMenu}>
                  Veure perfil
                </Link>
              </li>
              <li>
                <Link to="/app/perfil/editar" onClick={closeDashboardMenu}>
                  Actualitzar les dades
                </Link>
              </li>
              {role === 'org' && (
                <li onClick={closeDashboardMenu}>
                  <a>Veure autodiagnostic</a>
                </li>
              )}
            </>
          </DropdownMenu>
          {role === 'org' && (
            <DropdownMenu text="Gestió">
              <li onClick={closeDashboardMenu}>
                <a>Gestió de treballadores</a>
              </li>
            </DropdownMenu>
          )}
          {role === 'user' && (
            <DropdownMenu text="Organització">
              <li onClick={closeDashboardMenu}>
                <a>Informació general</a>
              </li>
              <li onClick={closeDashboardMenu}>
                <a>Autodiagnosi de l'organització</a>
              </li>
              <li onClick={closeDashboardMenu}>
                <a>Canvi d'organització</a>
              </li>
            </DropdownMenu>
          )}
          <DropdownMenu text="Contingut guardat">
            <li onClick={closeDashboardMenu}>
              <a>Metodologies</a>
            </li>
          </DropdownMenu>
          <DropdownMenu text="Formació">
            <>
              <li onClick={closeDashboardMenu}>
                <a>Formacions en curs</a>
              </li>
              <li onClick={closeDashboardMenu}>
                <a>Formacions finalitzades</a>
              </li>
              <li onClick={closeDashboardMenu}>
                <a>Formacions per començar</a>
              </li>
              {role === 'user' && (
                <li onClick={closeDashboardMenu}>
                  <a>Descarregar CV formatiu</a>
                </li>
              )}
            </>
          </DropdownMenu>
        </ul>
      </div>
      {filters && (
        <Filters filters={filters} className="side-section-filter" />
      )}
    </aside>
  )
}
