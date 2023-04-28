import { Icon } from '../../Atoms'
import { Text, Title } from '../../Typography'
import { Filters } from '../Filters'
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
    <aside className="side-section-filter">
      <div>
        <Text as="h2" variant="title" className="side-section-filter__title">
          {title}
        </Text>
        <Text>{description}</Text>
      </div>
      <Filters filters={filters} className='side-section-filter' />
    </aside>
  )
}
