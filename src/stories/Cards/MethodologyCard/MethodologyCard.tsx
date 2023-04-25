import { useEffect, useState } from 'react'
import { Icon } from '../../Atoms'
import { IconName } from '../../Atoms/Icon/svgs'
import { Text } from '../../Typography'
import './MethodologyCard.css'

export interface MethodologyCardProps {
  title: string
  summary?: string
  saved: boolean
}

export function MethodologyCard ({
  title,
  summary,
  saved = false,
}: MethodologyCardProps) {
  const [iconSwitch, setIconSwitch] = useState<IconName>('bookmarkOutline')

  useEffect(() => {
    if (saved) setIconSwitch('bookmark')
  }, [])

  const handleIconSwitch = () => {
    if (iconSwitch === 'bookmarkOutline') setIconSwitch('bookmark')
    if (iconSwitch === 'bookmark') setIconSwitch('bookmarkOutline')
  }

  return (
    <article className='methodology-card'>
      <header>
        <Text  variant='subtitle' as='h2'>
          {title}
        </Text>
        <Icon
          name={iconSwitch}
          onClick={handleIconSwitch}
          selectedColor='primary'
          hoverColor='primary'
          {...(iconSwitch === 'bookmark' && { selected: true })}
        />
      </header>
      <Text>
        {summary}
      </Text>
    </article>
  )
}
