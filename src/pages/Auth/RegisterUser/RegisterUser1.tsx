import { LayoutRegisterUser } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";

export default function RegisterUser1 (): JSX.Element {
  return (
    <LayoutRegisterUser>
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
      <Button
        label="Continuar"
        type="submit"
      />
    </LayoutRegisterUser>
  )
}
