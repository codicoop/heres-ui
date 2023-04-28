import { Icon } from '../../Atoms'
import './Filters.css'

export interface FiltersProps {
  filters: {
    name: string
    options: string[]
    value?: string
    color?: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white'
  }[]
  className?: string
}

export function Filters ({
  filters,
  className,
}: FiltersProps) {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
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
      <label className="input__search" htmlFor="search">
        <input name="search" type="text" placeholder="Cerca..." />
        <div className="input__search__icon">
          <Icon
            name="search"
            selectedColor="primary"
            hoverColor="primary"
          />
        </div>
      </label>
    </form>
  )
}
