import { useState } from 'react'
import './SelectFilter.css'
import { Text } from '../../Typography'

export interface SelectFilterProps {
  name: string
  options: string[]
  color?: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white'
  value?: string
}

export function SelectFilter ({
  name,
  options,
  color,
  value,
}: SelectFilterProps) {
  const [selected, setSelected] = useState<string>("")

  return (
    <label 
      className={`select-filter ${color ? `select-filter--${color}` : ''}`}
      htmlFor="select-filter"
    >
      <Text variant='subtitle'>{name}</Text>
      <select
        name="select-filter"
        id="select-filter"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
