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
  imgSide = 'right',
}: ContentBlockProps) {  
  return (
    <div className={`content-block content-block__img-${imgSide}`}>
      {text && <Text>{text}</Text>}
      {img && <img src={img} alt='img' />}
    </div>
  )
}
