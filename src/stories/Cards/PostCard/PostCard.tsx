import { Text } from '../../Typography'
import './PostCard.css'

export interface PostCardProps {
  title: string
  summary?: string
  ambit: string
  sector: string
  methodology?: string
}

export function PostCard ({
  title,
  summary,
  ambit,
  sector,
  methodology,
}: PostCardProps) {
  return (
    <article className='post-card'>
      <header className='post-card__header'>
        <Text  variant='subtitle' as='h2' extra>
          {title}
        </Text>
      </header>
      <Text>
        {summary}
      </Text>
      <footer className='post-card__footer'>
        <div className='post-card__footer--info post-card__ambit'>
          <Text size='small'>
            {ambit}
          </Text>
          <Text as='h3' variant="body" extra>
            Àmbit
          </Text>
        </div>
        <div className='post-card__footer--info post-card__sector'>
          <Text size='small'>
            {sector}
          </Text>
          <Text as='h3' variant="body" extra>
            Sector
          </Text>
        </div>
        {methodology && (
          <div className='post-card__footer--info post-card__methodology'>
            <Text size='small'>
              {methodology}
            </Text>
            <Text as='h3' variant="body" extra>
              Metodologia de referència
            </Text>
          </div>
        )}
      </footer>
    </article>
  )
}
