import { Text } from '../../Typography'
import './PracticeCard.css'

export interface PracticeCardProps {
  title: string
  summary: string
  ambit: string
  sector: string
  methodology: string
}

export function PracticeCard ({
  title,
  summary,
  ambit,
  sector,
  methodology,
}: PracticeCardProps) {
  return (
    <article className='practice-card'>
      <header className='practice-card__header'>
        <Text  variant='subtitle' as='h2' extra>
          {title}
        </Text>
      </header>
      <Text>
        {summary}
      </Text>
      <footer className='practice-card__footer'>
        <div className='practice-card__footer--info practice-card__ambit'>
          <Text size='small'>
            {ambit}
          </Text>
          <Text as='h3' variant="body" extra>
            Àmbit
          </Text>
        </div>
        <div className='practice-card__footer--info practice-card__sector'>
          <Text size='small'>
            {sector}
          </Text>
          <Text as='h3' variant="body" extra>
            Sector
          </Text>
        </div>
        <div className='practice-card__footer--info practice-card__methodology'>
          <Text size='small'>
            {methodology}
          </Text>
          <Text as='h3' variant="body" extra>
            Metodologia de referència
          </Text>
        </div>
      </footer>
    </article>
  )
}
