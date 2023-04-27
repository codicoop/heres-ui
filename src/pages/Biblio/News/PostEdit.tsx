import { LayoutDashboard } from "../../../components";
import { Input, Textarea } from "../../../stories/Forms";
import { Button } from "../../../stories/Molecules";

// Títol*
// Descripció curta* (màx 200 caràcters)
// Contingut*
// Data*
// Àmbit (Social / Ambiental)*
// Sector* (Igual que bones pràctiques)
// Metodologia vinculada (Opcional)
// Font d’origen de la notícia. (Opcional)
// Enllaç extern (Opcional)

export default function PostEdit (): JSX.Element {
  return (
    <LayoutDashboard sectionType="news">
      <form>
        <Input
          label="Títol"
          name="title"
          placeholder="Títol del post"
          required
        />
        <Textarea
          label="Descripció curta"
          name="summary"
          placeholder="Descripció curta del post"
          required
        />
        <Input
          label="Data"
          name="date"
          type="date"
          required
        />
        <Textarea
          label="Contingut"
          name="content"
          placeholder="Contingut del post"
          required
        />
        <Input
          label="Àmbit"
          name="scope"
          placeholder="Àmbit"
          required
        />
        <Input
          label="Sector"
          name="sector"
          placeholder="Sector"
          required
        />
        <Input
          label="Metodologia vinculada"
          name="methodology"
          placeholder="Metodologia vinculada"
        />
        <Input
          label="Font d’origen de la notícia"
          name="source"
          placeholder="Font d’origen de la notícia"
        />
        <Input
          label="Enllaç extern"
          name="link"
          placeholder="www.enllaçextern.com"
        />
        <Button
          type="submit"
          label="Actualitzar post"
        />
      </form>
    </LayoutDashboard>
  )
}
