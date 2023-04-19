import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../stories/Forms";
import { Title } from "../../stories/Typography/Title";
import { Button } from "../../stories/Button";
import { useContext } from "react";
import { WireframesContext } from "../../config/WireframesContext";

export default function Login (): JSX.Element {
  const { setAuth } = useContext(WireframesContext)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAuth(true)
    navigate('/app/inici')
  }
  return (
    <>
      <Title underline>Iniciar Sessió</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" />
        <Input label="Contrasenya" type="password" name="password" />
        <div>
          <Link to="/app/recoverpass">
            Recuperar contrasenya
          </Link>
          <Button
            type="submit"
            label="Iniciar Sessió"
          />
        </div>
        <Link to="/app/register/0" className="button button--base">
          Registrar-se
        </Link>
      </form>
    </>
  )
}
