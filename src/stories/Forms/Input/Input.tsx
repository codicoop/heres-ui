import '../forms.css'
import './Input.css'

export interface InputProps {
  label: string,
  name: string,
  placeholder?: string,
  type?: 'text' | 'email' | 'password',
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string,
}

export function Input ({
  label,
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className={`form--item`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        className={className}
      />
    </div>
  )
}
