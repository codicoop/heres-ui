// import { useRouteError } from "react-router-dom";

import Header from "../components/Header";
import { Text } from "../stories/Typography";

export default function Error404 (): JSX.Element {
  return (
    <>
      <Header />
      <text>Error</text>
      <Text variant="title" extra>404</Text>
    </>
  )
}
