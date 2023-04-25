import './Icon.css'
import { iconsMap, IconName, IconSize, IconColor, IconHoverColor } from './svgs'

export interface IconProps {
  name: IconName
  size?: IconSize
  color?: IconColor
  hoverColor?: IconHoverColor
  selectedColor?: IconColor
  selected?: boolean
  className?: string
  onClick?: () => void
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
  hoverColor = 'none',
  selectedColor,
  selected = false,
  className = '',
  onClick,
}: IconProps) {
  const icon = iconsMap[name]
  const mapSize = (size:string) => iconSize[size]
  const mapedSize = mapSize(size)

  const classColor = (selected && selectedColor) ? selectedColor : color

  return (
    <div
      className={`icon icon--${classColor} icon--hv-${hoverColor} ${className}`}
      style={{ 
        width: mapedSize,
        height: mapedSize,
        ...(onClick && { cursor: 'pointer' }),
      }}
      onClick={onClick}
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
