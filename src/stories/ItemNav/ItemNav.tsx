import './ItemNav.css'

export interface ItemNavProps {
  children: React.ReactNode,
  call?: boolean,
  className?: string,
}

export function ItemNav ({
  children,
  call = false,
  className,
}: ItemNavProps) {
  return (
    <li className={`item-nav ${className}${call ? ' item-nav--call' : ''}`}>
      {children}
    </li>
  )
}
