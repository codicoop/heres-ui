import { useContext } from "react"
import { WireframesContext } from "../config/WireframesContext"
import { Title } from "../stories/Typography"
import { Icon } from "../stories/Atoms"
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
        <Title>Panell d'{nameRole}</Title>
        <ul>
          <DropdownMenu text="Perfil">
            <li>
              <Link to="/app/perfil">Veure perfil</Link>
            </li>
            <li>
              <a href="/app/perfil/editar">Actualitzar les dades</a>
            </li>
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
