import { useContext } from "react"
import { WireframesContext } from "../config/WireframesContext"
import { Text } from "../stories/Typography"
import { Link } from "react-router-dom"
import { Input } from "../stories/Forms"
import { DropdownMenu } from "../stories/Molecules/DropdownMenu"

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
                <Link to="/app/perfil">Veure perfil</Link>
              </li>
              <li>
                <Link to="/app/perfil/editar">Actualitzar les dades</Link>
              </li>
              {role === 'org' && (
                <li>
                  <a>Veure autodiagnostic</a>
                </li>
              )}
            </>
          </DropdownMenu>
          {role === 'org' && (
            <DropdownMenu text="Gestió">
              <li>
                <a>Gestió de treballadores</a>
              </li>
            </DropdownMenu>
          )}
          {role === 'user' && (
            <DropdownMenu text="Organització">
              <li>
                <a>Informació general</a>
              </li>
              <li>
                <a>Autodiagnosi de l'organització</a>
              </li>
              <li>
                <a>Canvi d'organització</a>
              </li>
            </DropdownMenu>
          )}
          <DropdownMenu text="Contingut guardat">
            <li>
              <a>Metodologies</a>
            </li>
          </DropdownMenu>
          <DropdownMenu text="Formació">
            <>
              <li>
                <a>Formacions en curs</a>
              </li>
              <li>
                <a>Formacions finalitzades</a>
              </li>
              <li>
                <a>Formacions per començar</a>
              </li>
              {role === 'user' && (
                <li>
                  <a>Descarregar CV formatiu</a>
                </li>
              )}
            </>
          </DropdownMenu>
        </ul>
      </div>
      {filters && (
        <form className="side-section-filter">
          {filters.map((filter) => (
            <div key={filter.name}>
              <label htmlFor={filter.name}>{filter.name}</label>
              <select name={filter.name} id={filter.name}>
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <Input
            label="Buscar"
            name="search"
            type="text"
            placeholder="Cerca..."
            className="side-section-filter__search"
          />
        </form>
      )}
    </aside>
  )
}
