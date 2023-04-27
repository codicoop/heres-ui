import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { WireframesContext } from "../../config/WireframesContext";
import { Title } from "../../stories/Typography";
import { Button } from "../../stories/Molecules";
import { RegisterOrg1, RegisterOrg2, RegisterOrg3 } from "./RegisterOrg";
import { RegisterUser1, RegisterUser2, RegisterUser3, RegisterUser4 } from "./RegisterUser";
import './register.css'

export default function Register (): JSX.Element {
  const { role, setRole } = useContext(WireframesContext)
  const { step } = useParams()
  const navigate = useNavigate()

  const handleUser = () => {
    setRole('user')
    navigate('/app/register/1')
  }
  const handleOrg = () => {
    setRole('org')
    navigate('/app/register/1')
  }

  if (role === 'user') {
    if (step === '1') return <RegisterUser1 />
    if (step === '2') return <RegisterUser2 />
    if (step === '3') return <RegisterUser3 />
    if (step === '4') return <RegisterUser4 />
  }

  if (role === 'org') {
    if (step === '1') return <RegisterOrg1 />
    if (step === '2') return <RegisterOrg2 />
    if (step === '3') return <RegisterOrg3 />
  }

  return (
    <div className="register page">
      <div className="register__container">
        <Title underline>Registrar-se</Title>
        <Button
          label="Com a persona"
          onClick={handleUser}
          bigBtn
        />
        <Button
          label="Com a organització"
          relevance="base"
          onClick={handleOrg}
          bigBtn
        />
      </div>
    </div>
  )
}
