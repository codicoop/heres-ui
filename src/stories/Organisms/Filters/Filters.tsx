import { Icon } from '../../Atoms'
import { SelectFilter } from '../../Molecules'
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
    <form className={`${className} form-filter`} onSubmit={(e) => e.preventDefault()}>
      {filters.map((filter) => (
        <SelectFilter 
          key={filter.name}
          name={filter.name}
          options={filter.options}
          color={filter.color}
          value={filter.value}
        />
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
