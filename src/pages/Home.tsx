import { Menu } from "../routes";
import { Text } from "../stories/Text/Text";

export default function Home (): JSX.Element {
  return (
    <>
      <Text variant="title" extra>Here's UI</Text>
      <Menu />
    </>
  )
}
