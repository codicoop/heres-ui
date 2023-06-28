import { Link, useParams } from "react-router-dom";
import { Title } from "../../stories/Typography";
import { Tool1, Tool2, Tool3 } from "./index";

export default function Tool (): JSX.Element {
  const { step } = useParams()

  if (step === '1') return <Tool1 />
  if (step === '2') return <Tool2 />
  if (step === '3') return <Tool3 />

  return (
    <div className="tool page">
      <Title underline>Eina Autodiagnostic</Title>
      <Link to="/app/autodiagnostic/1" className="button">
        Comença la valoració
      </Link>
    </div>
  )
}
