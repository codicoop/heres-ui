import './ItemNav.css'

export interface ItemNavProps {
  children: React.ReactNode,
  className?: string,
}

export function ItemNav ({
  children,
  className,
}: ItemNavProps) {
  return (
    <li className={`item-nav ${className}`}>
      <span>
        {children}
      </span>
    </li>
  )
}
