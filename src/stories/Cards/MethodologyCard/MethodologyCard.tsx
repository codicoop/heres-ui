import { Text } from '../../Typography'
import './MethodologyCard.css'

export interface MethodologyCardProps {
  title: string
  summary?: string
}

export function MethodologyCard ({
  title,
  summary,
}: MethodologyCardProps) {
  return (
    <article className='methodology-card'>
      <Text  variant='subtitle' as='h2'>
        {title}
      </Text>
      <Text>
        {summary}
      </Text>
    </article>
  )
}
