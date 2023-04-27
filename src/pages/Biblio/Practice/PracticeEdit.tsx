import { LayoutDashboard } from "../../../components";
import { Input, Textarea } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import { Text } from "../../../stories/Typography";

// Títol de la bona pràctica*
// Descripció de la bona pràctica*
// Objectiu de la bona pràctica
// Descripció d’accions fetes
// Resultats aconseguits (Qualitatius i Quantitatius)* - Camp obert de text
// Organització*
// Logo organització (opcional)
// Període de desenvolupament de la bona pràctica* (Data d’inici, i data fi/sense fi)
// Sector* (Taula de sectors) - Select
// Àmbit (Social / Ambiental)*
// Grups d’interès / Stakeholders afectats* - Select
// Metodologia de referència* - Select +  camp obert altres
// Fotos de la bona pràctica (opcional)
// ODS vinculats amb logo visible (opcional). - Select múltiple
// Enllaç web a web organització amb la bona pràctica (Opcional)
// Email de persona de contacte de l’organització per més informació (Opcional)


export default function PracticeEdit (): JSX.Element {
  return (
    <LayoutDashboard sectionType="practice">
      <form>
        <Input
          label="Títol"
          name="title"
          placeholder="Títol"
          required
        />
        <div>
          <Text as="h2" variant="subtitle">
            Descripció de la bona pràctica
          </Text>
          <Textarea
            label="Objectiu de la bona pràctica"
            name="objective"
            placeholder="Objectiu de la bona pràctica"
            required
          />
          <Textarea
            label="Descripció d’accions fetes"
            name="actions"
            placeholder="Descripció d’accions fetes"
            required
          />
          <Textarea
            label="Resultats aconseguits (Qualitatius i Quantitatius)"
            name="results"
            placeholder="Resultats aconseguits (Qualitatius i Quantitatius)"
            required
          />
        </div>
        <Input
          label="Organització"
          name="organization"
          placeholder="Organització"
          required
        />
        <div className="form--item--group">
          <Text as="h2" variant="subtitle">
            Període de desenvolupament de la bona pràctica
          </Text>
          <div className="form--item--group-inline">
            <Input
              label="Data d’inici"
              name="start"
              placeholder="Data d’inici"
              type="date"
              required
            />
            <Input
              label="Data fi/sense fi"
              name="end"
              placeholder="Data fi/sense fi"
              type="date"
            />
          </div>
        </div>
        {/* Sector */}
        <Input
          label="Àmbit (Social / Ambiental)"
          name="scope"
          placeholder="Àmbit (Social / Ambiental)"
          required
        />
        {/* Grups d’interès / Stakeholders afectats */}
        {/* Metodologia de referència */}
        {/* Fotos de la bona pràctica */}
        {/* ODS vinculats amb logo visible */}
        <Input
          label="Enllaç web a web organització amb la bona pràctica"
          name="link"
          placeholder="www.example.com"
        />
        <Input
          label="Email de persona de contacte de l’organització per més informació"
          name="email"
          placeholder="contacte@exemple.com"
        />
        <Button
          type="submit"
          label="Actualitzar bona pràctica"
          color="primary"
        />
      </form>
    </LayoutDashboard>
  )
}
