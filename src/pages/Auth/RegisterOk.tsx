import { useContext } from "react";
import { WireframesContext } from "../../config/WireframesContext";
import { Text, Title } from "../../stories/Typography";
import { Link } from "react-router-dom";
import './register.css'

export default function RegisterOk (): JSX.Element {
  const { role } = useContext(WireframesContext)

  return (
    <div className="register">
      <div className="register__container">
        <Title underline>Genial!</Title>
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
      </div>
    </div>
  )
}
