import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WireframesContext } from "../../config/WireframesContext";
import { Input, Textarea } from "../../stories/Forms";
import { Button } from "../../stories/Molecules";
import { Title } from "../../stories/Typography";

export default function Contact (): JSX.Element {
  const { auth } = useContext(WireframesContext)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/app/contacte-ok')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title underline>Formulari de contacte</Title>
      {!auth && (
        <>
          <Input
            label="Nom"
            name="name"
            type="text"
            placeholder="Anna Massana"
          />
          <Input
            label="E-Mail"
            name="email"
            type="email"
            placeholder="anna-treball@mail.com"
          />
        </>
      )}
      <Input
        label="Motiu de contacte"
        name="motiu"
        type="text"
        placeholder="Acompanyament"
      />
      <Textarea
        label="Missatge"
        name="message"
        placeholder="Hola, vull acompanyament..."
      />

      <Button
        type="submit"
        label="Enviar missatge"
      />
    </form>
  )
}
