import './Icon.css'
import { iconsMap, options } from './svgs'

export interface IconProps {
  name: typeof options.names
  size?: typeof options.sizes
  color?: typeof options.colors
  className?: string
}

const iconSize: {[key: string]: number} = {
  xs: 14,
  sm: 25,
  md: 35,
  lg: 50,
  xl: 70,
}

export function Icon ({
  name,
  size = 'md',
  color = 'primary',
  className
}: IconProps) {
  const mapSize = (size:string) => iconSize[size]
  return (
    <div
      className={`icon icon--${size} icon--${color} ${className}`}
      style={{ 
        width: mapSize(size),
        height: mapSize(size),
       }}
    >
    </div>
  )
}
