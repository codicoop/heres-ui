import { Link } from "react-router-dom"
import { MethodologyCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, methodologies } from "./mock-methodology"
import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { JazzyAction } from "../../../stories/Molecules"

export default function MethodologyList (): JSX.Element {
  const { role, auth } = useContext(WireframesContext)

  return (
    <ContainerWithAside>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <main className="methodologies-list">
        {auth && role === "admin" && (
          <Link
            to="/app/metodologies/nova"
          >
            <JazzyAction
              text="Afegir una nova metodologia"
              icon="plus"
              color="secondary"
            />
          </Link>
        )}
        {methodologies.map((methodology) => (
          <Link
            to={`/app/metodologies/${methodology.id}`}
            key={methodology.id}
          >
            <MethodologyCard
              key={methodology.id}
              title={methodology.title}
              summary={methodology.summary}
              saved={methodology.saved}
            />
          </Link>
        ))}
      </main>
    </ContainerWithAside>
  )
}
