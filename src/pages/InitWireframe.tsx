import { Outlet, useParams } from "react-router-dom";
import { Text } from "../stories/Text/Text";
// import { useMemo } from "react";

export default function InitWireframe (): JSX.Element {
  const params = useParams()

  // const role = useMemo(() => {

  // }, [params.role])

  if (!params.role) return <Text>Role not found</Text>

  return (
    <>
      <Text>
        {params.role}
      </Text>
      <Outlet />
    </>
  )
}
