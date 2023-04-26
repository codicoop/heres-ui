import { Link } from "react-router-dom"
import { MethodologyCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, methodologies } from "./mock-methodology"

export default function MethodologyList (): JSX.Element {
  return (
    <ContainerWithAside>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <main className="methodologies-list">
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
