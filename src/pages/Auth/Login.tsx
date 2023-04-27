import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../stories/Forms";
import { Title } from "../../stories/Typography";
import { Button } from "../../stories/Molecules";
import { useContext } from "react";
import { WireframesContext } from "../../config/WireframesContext";
import './login.css'

export default function Login (): JSX.Element {
  const { setAuth } = useContext(WireframesContext)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAuth(true)
    navigate('/app/inici')
  }
  return (
    <div className="login page">
      <div className="login__container">
        <Title underline>Iniciar Sessió</Title>
        <form onSubmit={handleSubmit}>
          <Input label="Email" type="email" name="email" />
          <Input label="Contrasenya" type="password" name="password" />
          <div className="form__actions">
            <Link to="/app/recoverpass">
              Recuperar contrasenya
            </Link>
            <Button
              type="submit"
              label="Entrar"
            />
          </div>
          <Link to="/app/register/0" className="login__signup button button--base">
            Registrar-se
          </Link>
        </form>
      </div>
    </div>
  )
}
