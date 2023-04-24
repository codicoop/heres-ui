import { Text } from '../../Typography'
import './PostCard.css'

export interface PostCardProps {
  title: string
  summary?: string
}

export function PostCard ({
  title,
  summary,
}: PostCardProps) {
  return (
    <article className='post-card'>
      <Text  variant='subtitle' as='h2'>
        {title}
      </Text>
      <Text>
        {summary}
      </Text>
    </article>
  )
}
