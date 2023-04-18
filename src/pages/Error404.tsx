// import { useRouteError } from "react-router-dom";

import { Text } from "../stories/Typography/Text/Text";

// type ErrorRouter = {
//   message?: string
//   statusText?: string
// }

export default function Error404 (): JSX.Element {
  // const error: ErrorRouter = useRouteError();

  return (
    <>
      <text>Error</text>
      <Text variant="title" extra>404</Text>
      {/* <Text>
        {error?.message || error?.statusText || 'Not found'}
      </Text> */}
    </>
  )
}
