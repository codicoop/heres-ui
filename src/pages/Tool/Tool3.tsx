import { RadioInput } from "../../stories/Forms";
import { Button, CheckboxGroup } from "../../stories/Molecules";
import { LayoutTool } from "./index";

export default function Tool3 (): JSX.Element {
  return (
    <LayoutTool>
      <CheckboxGroup
        legend="Quin àmbit?"
        name="ambit"
        options={[
          { value: 'social', label: 'Social' },
          { value: 'ambiental', label: 'Ambiental' },
        ]}
      />
      <RadioInput
        legend="Busqueu resultats quantitatius o qualitatius?"
        name="resultats"
        options={[
          { value: 'quantitatius', label: 'Quantitatius' },
          { value: 'qualitatius', label: 'Qualitatius' },
        ]}
      />
      <Button
        type="submit"
        label="Finalitzar"
      />
    </LayoutTool>
  )
}
