import { Input } from '../../Forms'
import { Text, Title } from '../../Typography'
import './SideSectionFilter.css'

type filter = {
  name: string
  value: string
  options: string[]
  color?: "primary" | "secondary" | "tertiary" | "gray" | "white"
}

export interface SideSectionFilterProps {
  title: string
  description?: string
  filters: filter[]
}

export function SideSectionFilter ({
  title,
  description,
  filters,
}: SideSectionFilterProps) {
  return (
    <aside>
      <div>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </div>
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
    </aside>
  )
}
