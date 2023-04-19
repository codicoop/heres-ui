import './ItemNav.css'

export interface ItemNavProps {
  children: React.ReactNode,
}

export function ItemNav ({
  children,
}: ItemNavProps) {
  return (
    <li className='item-nav'>
      <span>
        {children}
      </span>
    </li>
  )
}
