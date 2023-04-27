import { LayoutRegisterOrg } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import '../RegisterUser/register_user.css'

export default function RegisterOrg2 (): JSX.Element {
  return (
    <LayoutRegisterOrg>
      <>
        <Input
          label="Nom comercial"
          name="comercial-name"
        />
        <Input
          label="Nom fiscal"
          name="fiscal-name"
        />
        <Input
          label="NIF"
          name="nif"
        />
        <Input
          label="Adreça de la seu social"
          name="address"
        />
        <Button
          label="Últim pas"
          type="submit"
        />
      </>
    </LayoutRegisterOrg>
  )
}
