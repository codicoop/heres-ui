import { Icon } from '../../Atoms'
import { IconName } from '../../Atoms/Icon/svgs'
import { Text } from '../../Typography'
import './JazzyAction.css'

export interface JazzyActionProps {
  text: string
  icon?: IconName
  onClick?: () => void
  iconSide?: 'left' | 'right'
  color?: 'primary' | 'secondary'
}

export function JazzyAction ({
  text,
  icon,
  onClick,
  iconSide = 'right',
  color,
}: JazzyActionProps) {
  return (
    <div
      className={`jazzy-action jazzy-action--${color} jazzy-action--${iconSide}`}
      onClick={onClick}
    >
      {icon && (
        <Icon 
          name={icon}
          {...(color === 'primary' && { color: 'white' })}
        />
      )}
      <Text>
        {text}
      </Text>
    </div>
  )
}
