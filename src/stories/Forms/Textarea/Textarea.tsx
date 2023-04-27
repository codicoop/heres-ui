import '../forms.css'
import './Textarea.css'

export interface TextareaProps {
  label: string,
  name: string,
  placeholder?: string,
  value?: string,
  className?: string,
  required?: boolean,
}

export function Textarea ({
  label,
  name,
  placeholder,
  value,
  className,
  required = false,
  ...props
}: TextareaProps): JSX.Element {
  return (
    <div className={`form--item`}>
      <label htmlFor={name}>{label} {required && <span className="form--item--required">*</span>}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        {...props}
        className={className}
      />
    </div>
  )
}
