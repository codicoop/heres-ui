import './Button.css'

export interface ButtonProps {
  label: string,
  onClick?: () => void,
  relevance?: 'call' | 'base' | 'shy',
  color?: 'primary' | 'secondary' | 'tertiary',
  type?: 'button' | 'submit' | 'reset',
  bigBtn?: boolean,
  className?: string,
}

export function Button ({
  label,
  onClick,
  relevance = 'call',
  color = 'primary',
  type = 'button',
  bigBtn = false,
  className,
  ...props
}: ButtonProps) {
  const buttonClass = `button button--${relevance} button--${color} ${bigBtn ? 'button--big' : ''} ${className ? className : ''}`
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
