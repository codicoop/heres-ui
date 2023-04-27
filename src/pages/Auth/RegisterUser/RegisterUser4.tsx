import { LayoutRegisterUser } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import './register_user.css'


export default function RegisterUser4 (): JSX.Element {
  return (
    <LayoutRegisterUser>
      <Input
        label="Perfil professional"
        name="professionalProfile"
        placeholder="Estudiant"
      />
      <Input
        label="Organització"
        name="organization"
        placeholder="Universitat de Barcelona"
      />
      <Button
        label="Registrar perfil"
        type="submit"
      />
    </LayoutRegisterUser>
  )
}
