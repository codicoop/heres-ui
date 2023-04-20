import { LayoutRegisterUser } from ".";
import { Input } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";

export default function RegisterUser2 (): JSX.Element {
  return (
    <LayoutRegisterUser>
      <Input
        label="Cognoms"
        name="surnames"
        placeholder="Sales Pons"
      />
      <Input
        label="Nom"
        name="name"
        placeholder="Joan"
      />
      <Input
        label="DNI"
        name="dni"
        placeholder="12345678Z"
      />
      <Input
        label="Data de naixement"
        name="birthdate"
        type="date"
      />
      <Button
        label="Seguir"
        type="submit"
      />
    </LayoutRegisterUser>
  )
}
