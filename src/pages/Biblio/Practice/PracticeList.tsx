import { Link } from "react-router-dom"
import { PracticeCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, practices } from "./mock-practice"

export default function PracticeList (): JSX.Element {
  return (
    <ContainerWithAside>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <main className="practice-list">
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
