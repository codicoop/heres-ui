import './Button.css'

export interface ButtonProps {
  label: string,
  onClick?: () => void,
  relevance?: 'call' | 'base' | 'shy',
  color?: 'primary' | 'secondary' | 'tertiary',
  type?: 'button' | 'submit' | 'reset',
  className?: string,
}

export function Button ({
  label,
  onClick,
  relevance = 'call',
  color = 'primary',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  const buttonClass = `button button--${relevance} button--${color} ${className ? className : ''}`
  return (
    <button
      onClick={onClick}
      type={type}
      {...props}
      className={buttonClass}
    >
      {label}
    </button>
  )
}
