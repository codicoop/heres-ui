import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { Title } from "../../../stories/Typography"

export default function Profile () {
  const { role } = useContext(WireframesContext)

  return (
    <>
      <Title underline>
        Perfil de l'{role}
      </Title>
    </>
  )
}
