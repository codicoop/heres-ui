import { Text } from '../../Typography'

export interface section {
  name: string,
  url?: string,
  color: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white',
  description?: string,
}

export function GoToSection ({
  name,
  color,
  description,
}: section): JSX.Element {
  return (
    <section 
      className={`go-to-sections--item item--${color}`}
    >
      <Text variant='subtitle' as='h2'>
        {name}
      </Text>

      {description && (
        <Text variant='body' as='p'>
          {description}
        </Text>
      )}
    </section>
  )
}
