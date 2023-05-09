import { Link } from "react-router-dom";
import { Title } from "../../stories/Typography";

export default function OnlyUserAccess (): JSX.Element {
  return (
    <div className="page--center">
      <Title underline>Accés només per usuaris</Title>
      <Link to="/app/inici" className="button button--base button--tertiary">
        Tornar a l'inici
      </Link>
    </div>
  )
}
