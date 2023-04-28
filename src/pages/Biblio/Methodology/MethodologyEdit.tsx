import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "../../../components";
import { Input, Textarea } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";
import { Text } from "../../../stories/Typography";

// Nom de la metodologia*
// Logo oficial (Opcional)
// Àmbit (Social / Ambiental)*
// Organització impulsora*
// Logo organització impulsora (Opcional)
// Web oficial (Opcional)
// Descripció de la metodologia*
// Resultats i mètriques generades.*
// Qualitatius
// Quantitatius
// Unitat monetària
// Altres unitats
// Sectors d’aplicació* (Veure comentari fitxa de bones pràctiques)
// Tipus de mesura:
// Prospectiva (a futur)
// Retrospectiva (passat)
// Aplicabilitat en funció del lucre:
// Per organitzacions amb lucre
// Per organitzacions sense lucre
// Complexitat d’implementació (grau de necessitat de persones, recursos i inversió en la seva aplicació):*
// Baix
// Mitjà
// Alt
// Bones pràctiques vinculades a aquesta metodologia (Previsualització de minifitxes automàtica)


export default function MethodologyEdit (): JSX.Element {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/app/metodologies/1')
  }

  return (
    <LayoutDashboard sectionType="methodology">
      <form onSubmit={handleSubmit}>
        <Input
          label="Nom de la metodologia"
          name="title"
          placeholder="Metodologia de referència"
          required
        />
        <Input
          label="Logo oficial"
          name="oficial-logo"
          placeholder="https://url-oficial-logo.com"
        />
        <Input
          label="Àmbit"
          name="scope"
          placeholder="Àmbit"
          required
        />
        <Input
          label="Organització impulsora"
          name="organization"
          placeholder="Organització impulsora"
          required
        />
        <Input
          label="Logo organització impulsora"
          name="organization-logo"
          placeholder="https://url-organització-logo.com"
        />
        <Input
          label="Web oficial"
          name="oficial-web"
          placeholder="https://url-oficial-web.com"
        />
        <Textarea
          label="Descripció de la metodologia"
          name="description"
          placeholder="Descripció de la metodologia"
          required
        />
        <div>
          <Text as="h2" variant="subtitle">
            Resultats i mètriques generades
          </Text>
          <Textarea
            label="Qualitatius"
            name="qualitative"
            placeholder="Qualitatius"
            required
          />
          <Textarea
            label="Quantitatius"
            name="quantitative"
            placeholder="Quantitatius"
            required
          />
          <Input
            label="Unitat monetària"
            name="monetary-unit"
            placeholder="Unitat monetària"
            required
          />
          <Input
            label="Altres unitats"
            name="other-units"
            placeholder="Altres unitats"
            required
          />
        </div>
        <Input
          label="Sectors d’aplicació"
          name="scope"
          placeholder="Sectors d’aplicació"
          required
        />
        <div>
          <Text as="h2" variant="subtitle">
            Tipus de mesura
          </Text>
          <Textarea
            label="Prospectiva (a futur)"
            name="prospective"
            placeholder="Prospectiva (a futur)"
            required
          />
          <Textarea
            label="Retrospectiva (passat)"
            name="retrospective"
            placeholder="Retrospectiva (passat)"
            required
          />
        </div>
        <div>
          <Text as="h2" variant="subtitle">
            Aplicabilitat en funció del lucre
          </Text>
          <Textarea
            label="Per organitzacions amb lucre"
            name="profit"
            placeholder="Per organitzacions amb lucre"
            required
          />
          <Textarea
            label="Per organitzacions sense lucre"
            name="non-profit"
            placeholder="Per organitzacions sense lucre"
            required
          />
        </div>
        {/* opcions */}
        <Input
          label="Complexitat d’implementació"
          name="complexity"
          placeholder="Baix / Mitjà / Alt"
          required
        />
        {/* Bones pràctiques vinculades a aquesta metodologia (Previsualització de minifitxes automàtica) */}
        <Button
          type="submit"
          label="Actualitzar metodologia"
        />
      </form>
    </LayoutDashboard>
  )
}
