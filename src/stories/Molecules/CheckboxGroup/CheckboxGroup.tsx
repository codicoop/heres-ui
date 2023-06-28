import './CheckboxGroup.css'

export interface CheckboxGroupProps {
  legend: string
  name: string
  options: {
    value: string
    label: string
    checked?: boolean
  }[]
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function CheckboxGroup ({
  legend,
  name,
  options,
}: CheckboxGroupProps) {
  return (
    <fieldset className="checkbox-group">
      <legend>{legend}</legend>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={option.checked}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  )
}
