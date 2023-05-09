import { Link } from "react-router-dom"
import { MethodologyCard } from "../../../stories/Cards"
import { ContainerWithAside } from "../../../stories/Layouts/ContainerWithAside"
import { Filters, SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, methodologies } from "./mock-methodology"
import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { JazzyAction } from "../../../stories/Molecules"
import { LayoutDashboard } from "../../../components"

export default function MethodologyList (): JSX.Element {
  const { role, auth } = useContext(WireframesContext)

  return (
    <LayoutDashboard infoSideSectionFilter={infoSideSectionFilter} sectionType="methodology">
      <>
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
        <section className="library__filters">
          <Filters filters={infoSideSectionFilter.filters} />
        </section>
        <section className="library__list">
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
                ambit={methodology.ambit}
                sectors={methodology.sectors}
              />
            </Link>
          ))}
        </section>
      </>
    </LayoutDashboard>
  )
}
