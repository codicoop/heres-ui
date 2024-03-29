import { useNavigate, useParams } from "react-router-dom";
import { Text, Title } from "../../../stories/Typography";
import { Steps } from "../../../stories/Forms";
import '../RegisterUser/register_user.css'

export default function LayoutRegisterOrg ({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const { step } = useParams()
  const totelSteps = 3
  let stepPosition = 0
  if (!step) stepPosition = 0
  if (step) stepPosition = parseInt(step)

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (stepPosition < totelSteps) 
      navigate(`/app/register/${stepPosition + 1}`)
    if (stepPosition === totelSteps)
      navigate(`/app/register-ok`)
  }

  return (
    <div className="register-user page">
      <div className="register-user__container">
        <Title underline>Registrar-se</Title>
        <Text>
          Els camps es podran modificar quan es tingui el perfil ja creat
        </Text>
        <Steps
          steps={totelSteps}
          progress={stepPosition}
        />
        <form onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}
