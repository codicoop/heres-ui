import './Title.css'

export interface TitleProps {
  children: React.ReactNode,
  underline?: boolean,
}

export function Title ({
  children,
  underline,
}: TitleProps) {
  return (
    <h1 className={`title ${underline ? 'title--underline' : ''}`}>
      {underline ? <span>{children}</span> : children}
    </h1>
  )
}
