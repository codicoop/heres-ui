import { Text } from '../../Typography'
import './ContentBlock.css'

export interface ContentBlockProps {
  text?: string
  img?: string
  imgSide?: 'left' | 'right'
}

export function ContentBlock ({
  text,
  img,
  imgSide,
}: ContentBlockProps) {
  let classes = 'content-block'
  const positionClass = imgSide || (img ? 'right' : 'left')
  classes += ` content-block__img-${positionClass}`

  return (
    <div className={classes}>
      {text && <Text>{text}</Text>}
      {img && <img src={img} alt='img' />}
    </div>
  )
}
