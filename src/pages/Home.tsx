import RoleButtons from "../components/RoleButtons";
import { Text } from "../stories/Typography";

export default function Home (): JSX.Element {
  return (
    <section className="select-role">
      <Text variant="title">Escull el Rol amb el que vols veure la demo</Text>
      <RoleButtons />
    </section>
  )
}
