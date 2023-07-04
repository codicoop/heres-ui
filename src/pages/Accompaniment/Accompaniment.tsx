import { Input } from "../../stories/Forms";
import { Button } from "../../stories/Molecules";
import { Text, Title } from "../../stories/Typography";
import './accompaniment.css'

export default function Accompaniment (): JSX.Element {
  const handleSubmit = (e: React.FormEvent) => {}
  return (
    <div className="accompaniment page">
      <section className="accompaniment__intro">
        <Title underline>Acompanyament</Title>
        <Text>
          L’acompanyament de les nostres persones expertes en mesura de l’impacte social i ambiental permet l’establiment d’indicadors clau, la presa de decisions estratègiques i el desenvolupament d’una pla d’acció amb objectius per la millora contínua.
        </Text>
        <Text>
          A Kamma t’ajudem a comprendre i millorar l’impacte positiu, optimitzar operacions, reforçar la relació amb els teus grups d’interès i a adaptar la teva organització al teu entorn de forma conscient i responsable. Maximitzant la teva contribució a la societat.
        </Text>
      </section>
      <form onSubmit={handleSubmit}>
        <Text variant="title">Demana un acompanyament per la teva entitat</Text>
        <Input label="Nom" type="text" name="name" />
        <Input label="Cognom" type="text" name="surname" />
        <Input label="Organització" type="text" name="organization" />
        <Input label="Tipus d’acompanyament" type="text" name="accompanimentType" />
        <Input label="Correu electrònic de contacte" type="email" name="email" />
        <Input label="Telèfon" type="tel" name="phone" />
        <Input label="Descripció de necessitats" type="text" name="description" />
        <Button
          type="submit"
          label="Enviar"
          color="primary"
        />
      </form>
    </div>
  )
}
