import './Radio.css'

interface Option {
  value: string
  label: string
}

export interface RadioProps {
  legend: string
  name: string
  options: Option[]
}

export function Radio ({
  legend = 'Radio',
  name = 'radio',
  options = [
    { value: '1', label: 'Si' },
    { value: '0', label: 'No' },
  ],
}: RadioProps) {
  return (
    <fieldset className="fieldset-radio">
      <legend>{legend}</legend>
      {options.map((option, index) => (
        <div className="radio" key={index}>
          <input type="radio" id={`${name}-${index}`} name={name} value={option.value} />
          <label htmlFor={`${name}-${index}`}>{option.label}</label>
        </div>
      ))}
    </fieldset>
  )
}
