import { useState } from 'react'
import { Icon } from '../../Atoms'
import { Text } from '../../Typography'
import './DropdownMenu.css'

export interface DropdownMenuProps {
  text: string
  isActived?: boolean
  children: JSX.Element | JSX.Element[]
}

export function DropdownMenu ({
  text,
  isActived,
  children,
}: DropdownMenuProps) {
  const initIsOpen = isActived ? true : false
  const [isOpen, setIsOpen] = useState<boolean>(initIsOpen)

  return (
    <li className={`dropdown-menu dropdown-menu-${isOpen ? 'open' : 'close'}`}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-menu__header"
      >
        <Text>{text}</Text>
        {isOpen ? (
          <Icon name="chevronDown" />
        ) : (
          <Icon name="chevronRight" />
        )}
      </div>
      <ul className="dropdown-menu__list">
        {children}
      </ul>
    </li>
  )
}
