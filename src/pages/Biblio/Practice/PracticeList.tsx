import { PracticeCard } from "../../../stories/Cards"
import { SideSectionFilter } from "../../../stories/Organisms"
import { infoSideSectionFilter, practices } from "./mock-practice"

export default function PracticeList (): JSX.Element {
  return (
    <>
      <SideSectionFilter
        title={infoSideSectionFilter.title}
        description={infoSideSectionFilter.description}
        filters={infoSideSectionFilter.filters}
      />
      <div className="practice-list">
        {practices.map((practice) => (
          <PracticeCard
            key={practice.id}
            title={practice.title}
            summary={practice.summary}
          />
        ))}
      </div>
    </>
  )
}
