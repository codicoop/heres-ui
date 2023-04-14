import '../forms.css'
import './CheckboxInput.css'

export interface CheckboxInputProps {
  label: string,
  name: string,
  checkPosition?: 'left' | 'right',
  checked?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string,
}

export function CheckboxInput ({
  label,
  name,
  checkPosition = 'left',
  checked,
  onChange,
  className,
  ...props
}: CheckboxInputProps): JSX.Element {
  return (
    <div className={`form--checkbox frorm--checkbox__${checkPosition}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
        className={className}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
