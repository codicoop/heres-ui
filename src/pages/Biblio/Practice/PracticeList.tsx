import { Link } from "react-router-dom"
import { PracticeCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, practices } from "./mock-practice"
import { JazzyAction } from "../../../stories/Molecules"
import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"

export default function PracticeList (): JSX.Element {
  const { auth } = useContext(WireframesContext)

  return (
    <ContainerWithAside>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <main className="practice-list">
        {auth && (
          <Link
            to="/app/practiques/nova"
          >
            <JazzyAction
              text="Afegir una nova pràctica"
              icon="plus"
              color="secondary"
            />
          </Link>
        )}
        {practices.map((practice) => (
          <Link
            to={`/app/practiques/${practice.id}`}
            key={practice.id}
          >
            <PracticeCard
              title={practice.title}
              summary={practice.summary}
            />
          </Link>
        ))}
      </main>
    </ContainerWithAside>
  )
}
