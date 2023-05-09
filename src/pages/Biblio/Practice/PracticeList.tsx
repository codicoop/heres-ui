import { Link } from "react-router-dom"
import { PracticeCard } from "../../../stories/Cards"
import { infoSideSectionFilter, practices } from "./mock-practice"
import { JazzyAction } from "../../../stories/Molecules"
import { LayoutDashboard } from "../../../components"
import { useContext } from "react"
import { WireframesContext } from "../../../config/WireframesContext"
import { Filters } from "../../../stories/Organisms"

export default function PracticeList (): JSX.Element {
  const { auth } = useContext(WireframesContext)

  return (
    <LayoutDashboard infoSideSectionFilter={infoSideSectionFilter} sectionType="practice">
      <>
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
        <section className="library__filters">
          <Filters filters={infoSideSectionFilter.filters} />
        </section>
        <section className="library__list">
          {practices.map((practice) => (
            <Link
              to={`/app/practiques/${practice.id}`}
              key={practice.id}
            >
              <PracticeCard
                title={practice.title}
                summary={practice.summary}
                ambit={practice.ambit}
                sector={practice.sector}
                methodology={practice.methodologyRef}
              />
            </Link>
          ))}
        </section>
      </>
    </LayoutDashboard>
  )
}
