import { LayoutRegisterOrg } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import '../RegisterUser/register_user.css'

export default function RegisterOrg1 (): JSX.Element {
  return (
    <LayoutRegisterOrg>
      <>
        <Input
          label="Mail"
          name="mail"
          type="email"
        />
        <Input
          label="Contrasenya"
          name="password"
          type="password"
        />
        <Input
          label="Repeteix la contrasenya"
          name="password2"
          type="password"
        />
        <Input
          label="Correu de contacte de l'organització"
          name="contactMail"
          type="email"
        />
        <Button
          label="Continuar"
          type="submit"
        />
      </>
    </LayoutRegisterOrg>
  )
}
