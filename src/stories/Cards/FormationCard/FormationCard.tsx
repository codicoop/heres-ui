import { Text } from '../../Typography'
import './FormationCard.css'

export interface FormationCardProps {
  title: string
  summary: string
  img?: string
  modality: 'Presencial' | 'Online' | 'Hibrida' | 'Asíncrona'
  lenguage: 'Català' | 'Castellà' | 'Altres'
  price: string
  duration: string
  methodology: 'Teoria' | 'Casos pràctics' | 'Assessoraments individuals'
  organization?: string
  startDate: string
  endDate: string
  teachers?: string[] | string
  level: 'Bàsic' | 'Mitjà' | 'Avançat'
}

export function FormationCard ({
  title,
  summary,
  img,
  modality,
  lenguage,
  price,
  duration,
  methodology,
  organization,
  startDate,
  endDate,
  teachers,
  level,
}: FormationCardProps) {
  return (
    <article className="formation-card">
      <header className="formation-card__header">
        <Text variant="subtitle" className="formation-card__title" extra>
          {title}
        </Text>
        {price === 'Gratuït' && (
          <Text variant="body" className="formation-card__price">
            {price}
          </Text>
        )}
      </header>
      <Text variant="body" className="formation-card__summary">
        {summary}
      </Text>
      <footer className="formation-card__footer">
        <Text>
          Curs <span>{modality}</span> en {lenguage}, de {duration}.
        </Text>
        <Text>
          Inici: {startDate} - Final: {endDate}
        </Text>
        <Text className="formation-card__level">
          Nivell: {level}
        </Text>
      </footer>
    </article>
  )
}
