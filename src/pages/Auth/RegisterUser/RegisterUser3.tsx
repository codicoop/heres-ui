import { LayoutRegisterUser } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import './register_user.css'


export default function RegisterUser3 (): JSX.Element {
  return (
    <LayoutRegisterUser>
      <Input
        label="Municipi de residència"
        name="city"
        placeholder="Barcelona"
      />
      <Input
        label="Codi postal"
        name="postalCode"
        placeholder="08001"
      />
      <Input
        label="Telèfon de contacte"
        name="phone"
        placeholder="666666666"
      />
      <Button
        label="Últim pas"
        type="submit"
      />
    </LayoutRegisterUser>
  )
}
