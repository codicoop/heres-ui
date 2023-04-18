import { Outlet } from "react-router-dom";
import { Text } from "../stories/Typography/Text/Text";

export default function InitWireframe (): JSX.Element {
  return (
    <>
      <Text>
        Menu Component
      </Text>
      <Outlet />
    </>
  )
}
