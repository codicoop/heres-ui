import { useNavigate, useParams } from "react-router-dom";
import { Text, Title } from "../../stories/Typography";
import { Steps } from "../../stories/Forms";
import './tool.css'

export default function LayoutTool ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {
  const { step } = useParams()
  const totalSteps = 3
  let stepPosition = 0
  if (!step) stepPosition = 0
  if (step) stepPosition = parseInt(step)

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (stepPosition < totalSteps) 
      navigate(`/app/autodiagnostic/${stepPosition + 1}`)
    if (stepPosition === totalSteps) 
      navigate(`/app/autodiagnostic-ok`)
  }

  return (
    <div className="tool-form page">
      <div className="tool-form__container">
        <Title underline>Eina Autodiagnostic</Title>
        <Text>
          Aquesta eina t'ajudarà a valorar el grau de maduresa digital de la teva organització.
        </Text>
        <Steps
          steps={totalSteps}
          progress={stepPosition}
        />
        <form onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}
