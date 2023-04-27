import '../forms.css'
import './Input.css'

export interface InputProps {
  label: string,
  name: string,
  placeholder?: string,
  type?: 'text' | 'email' | 'password' | 'date',
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  required?: boolean,
}

export function Input ({
  label,
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
  className,
  required = false,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className={`form--item`}>
      <label htmlFor={name}>{label} {required && <span className="form--item--required">*</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={className}
        {...props}
      />
    </div>
  )
}
