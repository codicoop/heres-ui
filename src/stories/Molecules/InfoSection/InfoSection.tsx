import { Text } from '../../Typography'
import './InfoSection.css'

export interface InfoSectionProps {
  category: string
  data: string
}

export function InfoSection ({
  category,
  data,
}: InfoSectionProps) {
  return (
    <div className='info-section'>
      <Text variant='subtitle' className='uppercase'>
        {category}
      </Text>
      <Text>
        {data}
      </Text>
    </div>
  )
}
