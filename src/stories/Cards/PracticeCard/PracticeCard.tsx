import { Text } from '../../Typography'
import './PracticeCard.css'

export interface PracticeCardProps {
  title: string
  summary?: string
}

export function PracticeCard ({
  title,
  summary,
}: PracticeCardProps) {
  return (
    <article className='practice-card'>
      <Text  variant='subtitle' as='h2'>
        {title}
      </Text>
      <Text>
        {summary}
      </Text>
    </article>
  )
}
