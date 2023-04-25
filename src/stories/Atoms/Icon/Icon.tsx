import './Icon.css'
import { iconsMap, IconName, IconSize, IconColor } from './svgs'

export interface IconProps {
  name: IconName
  size?: IconSize
  color?: IconColor
  className?: string
}

const iconSize: {[key: string]: number} = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
}

export function Icon ({
  name,
  size = 'sm',
  color = 'black',
  className = '',
}: IconProps) {
  const icon = iconsMap[name]
  const mapSize = (size:string) => iconSize[size]
  const mapedSize = mapSize(size)

  return (
    <div
      className={`icon icon--${color} ${className}`}
      style={{ 
        width: mapedSize,
        height: mapedSize,
       }}
    >
      <svg
        viewBox={icon.viewBox}
        width={mapedSize}
        height={mapedSize}
        xmlns='http://www.w3.org/2000/svg'
      >
        {icon.svg}
      </svg>
    </div>
  )
}
