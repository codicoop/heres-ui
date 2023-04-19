import { Text } from '../../Typography'
import './GoToSections.css'

export interface section {
  name: string,
  url: string,
  color: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white',
  description?: string,
}

export interface GoToSectionsProps {
  sections: section[],
}

export function GoToSections ({
  sections = [],
}: GoToSectionsProps): JSX.Element {
  return (
    <div className="go-to-sections">
      {sections?.map((section) => (
        <section 
          key={section.name}
          className={`go-to-sections--item item--${section.color}`}
        >
          <Text variant='subtitle' as='h2'>
            {section.name}
          </Text>

          {section.description && (
            <Text variant='body' as='p'>
              {section.description}
            </Text>
          )}
        </section>
      ))}
    </div>
  )
}