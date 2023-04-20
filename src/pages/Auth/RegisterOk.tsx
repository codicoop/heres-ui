import { useContext } from "react";
import { WireframesContext } from "../../config/WireframesContext";
import { Text, Title } from "../../stories/Typography";
import { Link } from "react-router-dom";

export default function RegisterOk (): JSX.Element {
  const { role } = useContext(WireframesContext)

  return (
    <>
      <Title underline>Registrar-se</Title>
      <Text>
        {role === 'user' 
          ? 'El teu perfil'
          : 'La teva organització'
        } s'ha registrat correctament.
      </Text>
      <Link
        to="/app/login"
        className="button button--call"
      >
        Inicia sessió
      </Link>
    </>
  )
}
