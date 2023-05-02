import { useEffect, useState } from 'react'
import { Icon } from '../../Atoms'
import { IconName } from '../../Atoms/Icon/svgs'
import { Text } from '../../Typography'
import './MethodologyCard.css'

export interface MethodologyCardProps {
  title: string
  summary?: string
  saved: boolean
  ambit: string
  sectors: string[] | string
}

export function MethodologyCard ({
  title,
  summary,
  saved = false,
  ambit,
  sectors,
}: MethodologyCardProps) {
  const [iconSwitch, setIconSwitch] = useState<IconName>('bookmarkOutline')

  useEffect(() => {
    if (saved) setIconSwitch('bookmark')
  }, [])

  const handleIconSwitch = () => {
    if (iconSwitch === 'bookmarkOutline') setIconSwitch('bookmark')
    if (iconSwitch === 'bookmark') setIconSwitch('bookmarkOutline')
  }

  const printSectors = () => {
    if (typeof sectors === 'string') return sectors
    if (sectors.length > 2) return `${sectors[0]}, ${sectors[1]}...`
    return sectors.join(', ')
  }

  return (
    <article className='methodology-card'>
      <header className='methodology-card__header'>
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
      <footer className='methodology-card__footer'>
        <div className='methodology-card__footer--info methodology-card__ambit'>
          <Text size='small'>
            {ambit}
          </Text>
          <Text as='h3' variant="body" extra>
            Àmbit
          </Text>
        </div>
        <div className='methodology-card__footer--info methodology-card__sector'>
          <Text size='small'>
            {typeof sectors === 'string' ? sectors : printSectors()}
          </Text>
          <Text as='h3' variant="body" extra>
            Sector
          </Text>
        </div>
      </footer>
    </article>
  )
}
