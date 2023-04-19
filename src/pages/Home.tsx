import RoleButtons from "../components/RoleButtons";
import { MenuRouter } from "../routes";
import { Text } from "../stories/Typography/Text/Text";

export default function Home (): JSX.Element {
  return (
    <>
      <Text variant="title" extra>Here's UI</Text>
      <RoleButtons />
      <MenuRouter />
    </>
  )
}
