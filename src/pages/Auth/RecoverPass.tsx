import { useNavigate } from "react-router-dom";
import { Input } from "../../stories/Forms";
import { Button } from "../../stories/Molecules";
import { Title } from "../../stories/Typography";

export default function RecoverPass (): JSX.Element {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/app/recoverpass-ok')
  }

  return (
    <>
      <Title underline>Reinicia la contrasenya</Title>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Introdueix el correu amb el que et vas registrar"
          type="email" name="email"
        />
        <Button
          type="submit"
          label="Enviar"
        />
      </form>
    </>
  )
}
