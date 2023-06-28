import { LayoutTool } from "./index";
import { RadioInput } from "../../stories/Forms";
import { Button } from "../../stories/Molecules";

export default function Tool1 (): JSX.Element {
  return (
    <LayoutTool>
      <RadioInput
        legend="La vostra entitat és lucrativa?"
        name="lucrativa"
        options={[
          { value: '1', label: 'Si' },
          { value: '0', label: 'No' },
        ]}
      />
      <RadioInput
        legend="Es tracta d’una entitat pública o privada?"
        name="publica-privada"
        options={[
          { value: '1', label: 'Entitat pública' },
          { value: '0', label: 'Entitat privada' },
        ]}
      />
      <RadioInput
        legend="Quantes treballadores teniu?"
        name="treballadores"
        options={[
          { value: '0 - 10', label: '0 - 10' },
          { value: '11 - 49', label: '11 - 49' },
          { value: '50 - 250', label: '50 - 250' },
          { value: '+250', label: 'Més de 250' },
        ]}
      />
      <Button
        type="submit"
        label="Següent"
      />
    </LayoutTool>
  )
}
