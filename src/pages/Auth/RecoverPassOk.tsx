import { Link } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";

export default function RecoverPassOk (): JSX.Element {
  return (
    <div className="register page">
      <div className="register__container">
        <Title underline>Reiniciar la contrasenya</Title>
        <Text>
          S'ha enviat un correu a la teva adreça electrònica amb les instruccions per reiniciar la contrasenya.
        </Text>
        <Link
          to="/app/login"
          className="button button-call"
        >
          Anar a Iniciar Sessió
        </Link>
      </div>
    </div>
  )
}
