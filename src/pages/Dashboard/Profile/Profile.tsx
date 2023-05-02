import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { Title } from "../../../stories/Typography"
import { InfoSection } from "../../../stories/Molecules"
import { orgInfo, userInfo } from "./mock-profile"
import { LayoutDashboard } from "../../../components"
import "./profile.css"

export default function Profile () {
  const { role } = useContext(WireframesContext)

  return (
    <LayoutDashboard>
      <section className="profile">
        <Title underline>
          Perfil de l'{role}
        </Title>
        {role === 'user' && (
          Object.values(userInfo).map((info, index) => (
            <InfoSection
              key={`info-user-${index}`}
              category={Object.keys(userInfo)[index]}
              data={info}
            />
          ))
        )}
        {role === 'org' && (
          Object.values(orgInfo).map((info, index) => (
            <InfoSection
              key={`info-org-${index}`}
              category={Object.keys(orgInfo)[index]}
              data={info}
            />
          ))
        )}
      </section>
    </LayoutDashboard>
  )
}
