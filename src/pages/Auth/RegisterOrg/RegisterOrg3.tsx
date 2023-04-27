import { LayoutRegisterOrg } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import '../RegisterUser/register_user.css'

export default function RegisterOrg3 (): JSX.Element {
  return (
    <LayoutRegisterOrg>
      <>
        <Input
          label="Sector"
          name="sector"
        />
        <Input
          label="Nombre de persones que treballen a l'organització"
          name="workers-number"
        />
        <Button
          label="Registrar organització"
          type="submit"
        />
      </>
    </LayoutRegisterOrg>
  )
}
