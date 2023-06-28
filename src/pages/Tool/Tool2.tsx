import { Button, CheckboxGroup } from "../../stories/Molecules";
import { LayoutTool } from "./index";

export default function Tool2 (): JSX.Element {
  return (
    <LayoutTool>
      <CheckboxGroup
        legend="A quins sectors treballeu?"
        name="sectors"
        options={[
          { value: 'Alimentació i begudes', label: 'Alimentació i begudes' },
          { value: 'Automoció i materials d\'automòbils', label: 'Automoció i materials d\'automòbils' },
          { value: 'Comerç i distribució', label: 'Comerç i distribució' },
          { value: 'Construcció i Enginyeria', label: 'Construcció i Enginyeria' },
          { value: 'Energètic', label: 'Energètic' },
          { value: 'Equips Electrònics', label: 'Equips Electrònics' },
          { value: 'Farmacèutic i biotecnologia', label: 'Farmacèutic i biotecnologia' },
          { value: 'Hosteleria, restauració, turisme i esport', label: 'Hosteleria, restauració, turisme i esport' },
          { value: 'Indústria aeronàutica i aeroespacial', label: 'Indústria aeronàutica i aeroespacial' },
          { value: 'Indústria química', label: 'Indústria química' },
          { value: 'Indústria, Conglomerats i altres', label: 'Indústria, Conglomerats i altres' },
          { value: 'Medis de comunicació, cultura i gràfiques', label: 'Medis de comunicació, cultura i gràfiques' },
          { value: 'Metalls i mineria', label: 'Metalls i mineria' },
          { value: 'Serveis de sanitat', label: 'Serveis de sanitat' },
          { value: 'Serveis financers de banca i assegurances', label: 'Serveis financers de banca i assegurances' },
          { value: 'Serveis immobiliaris', label: 'Serveis immobiliaris' },
          { value: 'Serveis Professionals', label: 'Serveis Professionals' },
          { value: 'Silvicultura (Fusta, pulpa i paper)', label: 'Silvicultura (Fusta, pulpa i paper)' },
          { value: 'Telecomunicacions i tecnologies de la informació', label: 'Telecomunicacions i tecnologies de la informació' },
          { value: 'Tèxtil, articles de luxe i calçat', label: 'Tèxtil, articles de luxe i calçat' },
          { value: 'Transports i emmagatzematge', label: 'Transports i emmagatzematge' },
          { value: 'Utilitats (aigua, gas i llum)', label: 'Utilitats (aigua, gas i llum)' },
          { value: 'Altres', label: 'Altres' },
          { value: 'Tercer sector, educació, sindicats i patronals', label: 'Tercer sector, educació, sindicats i patronals' },
        ]}
      />
      <Button
        type="submit"
        label="Últim pas"
      />
    </LayoutTool>
  )
}
